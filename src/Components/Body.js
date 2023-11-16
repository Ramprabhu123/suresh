import React, { useState } from 'react'

const Body = () => {
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="profile pic"/>
        <button onClick={increment}>Likes:{count}</button>
    </div>
  )
}

export default Body