import React, { useState } from 'react'

const Container = () => {
    const [color,setcolor]=useState("Red")
  return (
    <div>
        <h1>the color is {color}</h1>
        <button onClick={()=>setcolor("Blue")}>click here</button>
    </div>
  )
}

export default Container