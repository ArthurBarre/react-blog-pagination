import React from 'react'

const posts = ({ posts, loading }) => {
  if (loading) {
    return <h2> is loading ...</h2>
  } else {
    return (
      <ul className="list-group mb-4">
        {
          posts.map(post => (
            <li key="post.id" className="list-group-item">
              {post.title}
            </li>
          ))
        }
      </ul>)
  }
}

export default posts;
