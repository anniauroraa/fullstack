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

// const nonExistingId = async () => {
//   const note = new Note({ content: 'willremovethissoon' })
//   await note.save()
//   await note.deleteOne()

//   return note._id.toString()
// }

const blogsInDB = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, 
  blogsInDB
}