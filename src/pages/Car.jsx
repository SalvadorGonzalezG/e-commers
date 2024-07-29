// Importamos el hook que hemos personalizado desde el archivo de contexto AppContext.jsx
import { useAppContext } from "../context/AppContext"

import { IoAdd } from "react-icons/io5";

const Car = () => {
  // Usamos el hook personalizado para acceder al estado y la funcion de actualización de contexto
  const {lessValue, moreValue, items } = useAppContext();

  return (
    <div className="buy-car">
      
      <h1 className="buyCarTitle">Productos en tu Carrito:</h1>
    <div className="menu">
      <div className="menu-container">
        <div className="grid-container">
          {items.map((item, index)=>
        
      <div className="grid-item" key={index}>
        <div className='more-info'>
          <button><IoAdd />
          </button>
        </div>
        <div>
                  <img className='img-central' src={item.img} alt="img" />
                </div>
                <div className='contenido'>
                  <section>
                    <h2> <i>ID:</i> {item.id}</h2>
                    <i>name</i> {item.name} <br />
                    <i>age:</i> {item.age} <br />
                    <i>pais:</i> {item.pais} <br />
                    <b>
                      <i>@mail</i> {item.mail}
                    </b>
                  </section>
                </div>
                {/*Colocamos los botones para sumar cuantos articulos se te cobraran */}
                <div className="buttonMoreLess">
                <button onClick={()=>lessValue(item.id)}>-</button>
                <section>{item.count}</section>
                <button onClick={()=>moreValue(item.id)}>+</button>
                </div>
                </div>
                )}
      </div>
    </div>

      </div>

    </div>
  )
}

export default Car