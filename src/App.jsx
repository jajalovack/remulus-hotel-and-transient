import { useState } from 'react'
import HomeHero from './sections/HomeHero'
import Header from './sections/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HomeHero/>
    </>
  )
}

export default App
