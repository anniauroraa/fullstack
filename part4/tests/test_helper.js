const Blog = require('../models/post')

const initialBlogs = [
    {
        "title": "Kirje Myrskyvaroitukseen",
        "author": "Elokapina",
        "url": "https://blogi.elokapina.fi/kirje-myrskyvaroituksen",
        "likes": 20
    },
    {
        "title": "Ekologinen jälleenrakennus",
        "author": "BIOS",
        "url": "https://eko.bios.fi",
        "likes": 1000
    }
]

const newBlog = {
    title: 'Test blog',
    author: 'Test Author',
    url: 'https://www.testblog.com',
    likes: 1
}

const newBlogWithoutLikes = {
    title: 'Test blog',
    author: 'Test Author',
    url: 'https://www.testblog.com'
}

const newBlogWithoutTitle = {
    author: 'Joku vaan',
    url: 'http://otsikko-puuttuu.fi'
}

const newBlogWithoutUrl = {
    title: 'Otsikko',
    author: 'Joku vaan'
}


const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDB = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, 
  newBlog,
  newBlogWithoutLikes,
  newBlogWithoutTitle,
  newBlogWithoutUrl,
  nonExistingId,
  blogsInDB
}