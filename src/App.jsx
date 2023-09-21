//import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import routes from "./routes"
import Header from './sections/Header'
import Footer from "./sections/Footer"
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header className="navBar"/>
        <main>
          <Routes>
            {
              routes.map((route,index)=>{
                return(
                  <Route key={index} path={route.path} element={route.element} exact/>
                )
              })
            }
          </Routes>
        </main>
      <Footer/>
    </>
  )
}

export default App
