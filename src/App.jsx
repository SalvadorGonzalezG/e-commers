import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import SubHeader from "./components/SubHeader"
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router> {/*BrowserRouter*/}
        <div className="app-container">

          <Header />

          <SubHeader />
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/Login" element={<Login/>} />
          </Routes>

          <Footer />

        </div>

      </Router>
    </>
  )
}

export default App
