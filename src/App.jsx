import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import SubHeader from "./components/SubHeader"
import Login from "./pages/Login"
import Car from "./pages/Car" // importando el compornente car.
import Ayuda from "./pages/Ayuda"
import Outlet from "./pages/Outlet"
import Register from "./pages/Register"
import Descuentos from "./pages/Descuentos"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"
import { AppProvider } from "./context/AppContext"

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
            <Route path="" element={isLogin ? <Login/> :<Menu />} />
            <Route path="/login" element={<Login/>}/>
            <Route path='/car' element={<Car />} /> {/*Rota para el carrito de compras y pasamos el estado del carrito*/}
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path='/outlet' element={<Outlet/>} />
            <Route path="/descuentos" element={<Descuentos/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>

          <Footer />

        </div>
    </Router>
    </>
  )
}

export default App
