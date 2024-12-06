const dummy = (blogs) => {
    // console.log("testingg...")
    return 1
}

const totalLikes = (blogs) => {
    // console.log("print blog list: " + blogs)
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    const maxLikes = Math.max(...blogs.map(blog => blog.likes))

    const favoriteBlog = blogs.find(blog => blog.likes === maxLikes)

    if (!favoriteBlog) {
        return null
    }  
    blogCorrectFormat = {title: favoriteBlog.title,
                         author: favoriteBlog.author,
                         likes: favoriteBlog.likes}

    console.log("favorite blog: " + blogCorrectFormat)
    return blogCorrectFormat
}   

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}