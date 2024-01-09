import React from 'react'

const A = ({msg, posts}) => {
  return (
    <div>
      <h1>A Comp</h1>
      <p>{msg}</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default A