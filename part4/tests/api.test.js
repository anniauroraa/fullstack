const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const helper = require('./test_helper')

const Blog = require('../models/post')

beforeEach(async () => {
    await Blog.deleteMany({})
  
    await Blog.insertMany(helper.initialBlogs)
})

describe('when there is initially some blogs saved', () => {
    test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('there are correct amount of blogs', async () => {
        const response = await api.get('/api/blogs')
    
        // execution gets here only after the HTTP request is complete
        // the result of HTTP request is saved in variable response
        assert.strictEqual(response.body.length, helper.initialBlogs.length)
    })
    
    test('a specific note is within the returned blogs', async () => {
        const response = await api.get('/api/blogs')

        const titles = response.body.map(e => e.title)
        assert(titles.includes('Kirje Myrskyvaroitukseen'))
    })

    describe('viewing a specific note', () => {

        test('unique property of the blog is named id', async () => {
        const blogsAtStart = await helper.blogsInDB()

        blogsAtStart.forEach((blog) => {
            assert(blog.id, 'Blog should have an id property'); // Check if `id` exists
            assert.strictEqual(blog._id, undefined, 'Blog should not have an _id property'); // Ensure `_id` is undefined
            })
        })

        test('succeeds with a valid id', async () => {
        const blogsAtStart = await helper.blogsInDB()

        const blogToView = blogsAtStart[0]

        const resultBlog = await api
            .get(`/api/blogs/${blogToView.id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        assert.deepStrictEqual(resultBlog.body, blogToView)
        })
    })

    describe('addition of a new blog', () => {
        test('successfully creates a new blog post', async () => {

        await api
            .post('/api/blogs')
            .send(helper.newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)
        
        // Fetch blogs after adding the new one
        const blogsAtEnd = await helper.blogsInDB()
        assert.strictEqual(
            blogsAtEnd.length,
            helper.initialBlogs.length + 1,
            'The total number of blogs should increase by one'
        )   
        })
    })

    describe('Blog properties', () => {
        test('likes property defaults to 0 when missing', async () => {

        const response = await api
            .post('/api/blogs')
            .send(helper.newBlogWithoutLikes)
            .expect(201) // Expect status code 201 (Created)
            .expect('Content-Type', /application\/json/)

        // Verify the "likes" property of the created blog
        const createdBlog = response.body
        assert.strictEqual(createdBlog.likes, 0, 'The "likes" property should default to 0')

        // Verify the new blog is saved in the database
        const savedBlog = await Blog.findById(createdBlog.id);
        assert.strictEqual(savedBlog.likes, 0, 'The saved blog should have likes set to 0')
        })

        test('responds with 400 if the title is missing', async () => {
            const response = await api
                .post('/api/blogs')
                .send(helper.newBlogWithoutTitle)
                .expect(400) 
                .expect('Content-Type', /application\/json/)
        
            // Verify the error message is correct
            assert.strictEqual(response.body.error, 'Blog validation failed: title: Path `title` is required.');
        })

        test('responds with 400 if the url is missing', async () => {
            const response = await api
                .post('/api/blogs')
                .send(helper.newBlogWithoutUrl)
                .expect(400)
                .expect('Content-Type', /application\/json/)
            
            // Verify the error message is correct
            assert.strictEqual(response.body.error, 'Blog validation failed: url: Path `url` is required.')
        })
    })

    describe('deletion of a blog', () => {
        test('succeeds with status code 204 if id is valid', async () => {
        const blogsAtStart = await helper.blogsInDB()
        const blogToDelete = blogsAtStart[0]

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)

        const blogsAtEnd = await helper.blogsInDB()

        const titles = blogsAtEnd.map(blog => blog.title)
        assert(!titles.includes(blogToDelete.title))
        
        assert.strictEqual(
            blogsAtEnd.length,
            helper.initialBlogs.length - 1,
            'The total number of blogs should decrease by one'
        )
        })

        test('updating the information of a blog post', async () => {
        const blogsAtStart = await helper.blogsInDB()
        const blogToUpdate = blogsAtStart[0]

        const updatedBlog = {
            ...blogToUpdate,
            likes: blogToUpdate.likes + 1,
        }

        await api
            .put(`/api/blogs/${blogToUpdate.id}`)
            .send(updatedBlog)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDB()
        const updatedBlogAtEnd = blogsAtEnd.find(blog => blog.id === blogToUpdate.id)

        assert.strictEqual(updatedBlogAtEnd.likes, blogToUpdate.likes + 1)
        })
    })
})


after(async () => {
    await mongoose.connection.close()
})