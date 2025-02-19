import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home properties={{properties:'Hello',sjit:'sjit'}}/>
      <hr />
      <Gallery/>
      <hr />
      <Signup/>
      <hr />
      <Contact/>
      <hr />
      <About/>
      <hr />
    </>
  )
}

export default App
