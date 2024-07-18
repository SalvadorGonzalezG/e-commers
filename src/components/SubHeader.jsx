import { useNavigate } from "react-router-dom"

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
  return (
    <>
    <div className='sub-header'>
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