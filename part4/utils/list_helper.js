const dummy = (blogs) => {
    // console.log("testingg...")
    return 1
}

const totalLikes = (blogs) => {
    // console.log("print blog list: " + blogs)
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

module.exports = {
    dummy,
    totalLikes
}