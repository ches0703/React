import React, { useCallback } from 'react'

const ListItem = React.memo(({post}) => {
  return (
    <li>
      <p>{post.title}</p>
    </li>
  )
})

const List = React.memo(({posts}) => {
  console.log("List is Rendered")
  return (
    <ul>
      {posts.map((post) => {
        return (
          <ListItem key={post.id} post={post}></ListItem>
        )
      })}
    </ul>
  )
})


const Msg = ({msg}) => {
  return (
    <p>{msg}</p>
  )
}


const B = ({msg, posts}) => {
  console.log("B Comp Rendered")
  const testFunc = useCallback(() => {}, [])
  return (
    <div>
      <h1>B Comp</h1>
      <Msg msg={msg}></Msg>
      <List posts={posts} testFunc={testFunc}></List>
    </div>
  )
}

export default B