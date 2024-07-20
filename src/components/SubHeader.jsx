import { useNavigate } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";

const SubHeader = () => {
  const navigate = useNavigate()

  const handleAyudaClick=()=>{
    navigate('/ayuda')
  }
  const handleOutletClick=()=>{
    navigate('/outlet')
  }
  const handleDescuentoClick = () => {
    navigate('/descuentos')
  }  
  const handleHomeClick=() =>{
    navigate('/home')
  }
  return (
    <>
    <div className='sub-header'>
      <div><button onClick={handleHomeClick}><AiOutlineHome/></button></div>
        <div>
            <button onClick={handleOutletClick}>Outlet</button>
        </div>
        <div>
            <button onClick={handleDescuentoClick}>Descuentos</button>
        </div>
        <div>
            <button onClick={handleAyudaClick}>Ayuda</button>
        </div>

    </div>
    </>
  )
}

export default SubHeader