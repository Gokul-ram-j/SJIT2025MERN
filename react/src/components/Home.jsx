import React from 'react'

function Home({properties}) {
  return (
    <div>
      <h1>Home page</h1>
      <h2>Below Tag is for props</h2>
      <h3>Props:{properties.properties} {properties.sjit}</h3>
    </div>
  )
}

export default Home