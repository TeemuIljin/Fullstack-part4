const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + (blog.likes || 0), 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }
  
  return blogs.reduce((favorite, blog) => {
    return (blog.likes || 0) > (favorite.likes || 0) ? blog : favorite
  })
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorCounts = {}
  
  blogs.forEach(blog => {
    const author = blog.author
    authorCounts[author] = (authorCounts[author] || 0) + 1
  })

  let maxBlogs = 0
  let topAuthor = null

  for (const [author, count] of Object.entries(authorCounts)) {
    if (count > maxBlogs) {
      maxBlogs = count
      topAuthor = author
    }
  }

  return {
    author: topAuthor,
    blogs: maxBlogs
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorLikes = {}
  
  blogs.forEach(blog => {
    const author = blog.author
    authorLikes[author] = (authorLikes[author] || 0) + (blog.likes || 0)
  })

  let maxLikes = 0
  let topAuthor = null

  for (const [author, likes] of Object.entries(authorLikes)) {
    if (likes > maxLikes) {
      maxLikes = likes
      topAuthor = author
    }
  }

  return {
    author: topAuthor,
    likes: maxLikes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
