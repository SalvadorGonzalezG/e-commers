import { useNavigate } from "react-router-dom"

const SubHeader = () => {
  const navigate = useNavigate()

  const handleAyudaClick=()=>{
    navigate('/ayuda')
  }
  return (
    <>
    <div className='sub-header'>
        <div>
            <button>Outlet</button>
        </div>
        <div>
            <button>Descuentos</button>
        </div>
        <div>
            <button onClick={handleAyudaClick}>Ayuda</button>
        </div>

    </div>
    </>
  )
}

export default SubHeader