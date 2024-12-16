const blogRouter = require('express').Router()
const { mongo } = require('mongoose')
const Blog = require('../models/post')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
  })
  
blogRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)

  const savedBlog = await blog.save()
  response.status(201).json(savedBlog)
})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

module.exports = blogRouter