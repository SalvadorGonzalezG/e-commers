// Importamos el hook que hemos personalizado desde el archivo de contexto AppContext.jsx
import { useAppContext } from "../context/AppContext"

import { IoAdd } from "react-icons/io5";

const Car = () => {
  // Usamos el hook personalizado para acceder al estado y la funcion de actualización de contexto
  const {lessValue, value, moreValue, items } = useAppContext();


  return (
    <div>
      {/*Mostrar el número de compras en el carrito utilizando el valor del estado */}
      <h1>Carrito de Comprastiene: {value} compras.</h1>
      {/*Boton para incrementar el numero de compras, llamando a funcioin moreValue al hacer click*/}
      <button onClick={moreValue}>Incrementar compras</button>
      <h2>Items en el carrito</h2>
      <ul>{items.map((item, index) => (
        <li key={index}>
          {item.name}
          {item.id}
          {item.pais}
          <img src="{item.img}" />
        </li>
      ))}</ul>
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
                <button onClick={lessValue}>-</button>
                <section>{value}</section>
                <button onClick={moreValue}>+</button>
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