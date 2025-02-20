import React, { useEffect, useState } from 'react'

function Home({properties}) {
  useEffect(()=>{
    console.log('useEffect triggered')
  })
  const [text,setText]=useState('')
  return (
    <div>
      <h1>useState Example</h1>
      <input type="text" onChange={(e)=>setText(e.target.value)} value={text} />
      <h1>value typed {text}</h1>
    </div>
  )
}

export default Home