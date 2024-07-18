import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import SubHeader from "./components/SubHeader"
import Login from "./pages/Login"
import Car from "./pages/Car" // importando el compornente car.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"

function App() {
  {/*Estado para controlar si se se muestra el Menu o el Login */}
 const [isLogin, setIsLogin] = useState(false)

 const handleLoginClick = () =>{
  setIsLogin(true)
 }
  return (
    <>
{/*Peparando el enrutador */}
    <Router>
        <div className="app-container">
{/*Pasando el prop de forma correcta para que al dar click en el boton el componente se renderice*/}
          <Header onLoginClick={handleLoginClick} />

          <SubHeader />
          <Routes>
            <Route path="/" element={isLogin ? <Login/> :<Menu/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path='/car' element={<Car/>} /> {/*Rota para el carrito de compras */}
          </Routes>

          <Footer />

        </div>
    </Router>

    </>
  )
}

export default App
