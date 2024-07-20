import { useState } from "react"

const Car = ({valor}) => {
  // inicializamos el estado del contador

  return (
    <div>
      <h1>Carrito de Comprastiene: {valor} compras.</h1>
    </div>
  )
}

export default Car