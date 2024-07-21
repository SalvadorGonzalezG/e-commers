// Importamos el hook que hemos personalizado desde el archivo de contexto AppContext.jsx
import { useAppContext } from "../context/AppContext"

const Car = () => {
  // Usamos el hook personalizado para acceder al estado y la funcion de actualización de contexto
  const { value, moreValue } = useAppContext();


  return (
    <div>
      {/*Mostrar el número de compras en el carrito utilizando el valor del estado */}
      <h1>Carrito de Comprastiene: {value} compras.</h1>
      {/*Boton para incrementar el numero de compras, llamando a funcioin moreValue al hacer click*/}
      <button onClick={moreValue}>Incrementar compras</button>
    </div>
  )
}

export default Car