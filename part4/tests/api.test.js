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

    test('there are two blogs', async () => {
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
})


after(async () => {
    await mongoose.connection.close()
})