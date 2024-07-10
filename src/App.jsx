import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import SubHeader from "./components/SubHeader"
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"

function App() {
  
 

  return (
    <>
{/*Peparando el enrutador */}
    <Router>
        <div className="app-container">
{/*Pasando el prop de forma correcta para que al dar click en el boton el componente se renderice*/}
          <Header/>

          <SubHeader />
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/" element={<Login/>}/>
          </Routes>

          <Menu/>

          <Footer />

        </div>
    </Router>

    </>
  )
}

export default App
