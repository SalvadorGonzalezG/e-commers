/* La Context API permite compartir datos a través de la aplicación sin tener que pasar props manualmente a cada nivel de la jerarquía. */

// importar funciones necesarias desde React
import { createContext, useState, useContext } from 'react'
// Crear el contexto. este sera el contenedor de los datos que queremos compartir.
const AppContext = createContext();

// crear el provedor del contexto que envuelve los componentes hijos y proporciona el estado y las funciones.

export const AppProvider = ({ children }) => {
    // inicializamos nuestro estado y una funcion para actualizarlo.
    //const [value, setValue] = useState(0);
    const [items, setItems] = useState([])

    // f: para agregar un item a la lista de items.
    const addItem=(item)=>{
        //setItems((prevItems)=>[...prevItems, item])
        //Actualiza el estado de items, verificando si el item ya existe
        setItems((prevItems)=>{
            const existingItem = prevItems.find(i=> i.id === item.id);
            if(existingItem){
        //Si el item ya existe, incremneta su conteo iniciando que ya tienes 1 item
                return prevItems.map(i =>
                    i.id === item.id ? {...i, count: i.count + 1}: i
                );
        //Si el item no existe, agregalo con un conteo incial de 1
            } else {
                return [...prevItems, { ...item, count: 1}];
            }
        })
    }

    // funcion para incrementar el conteo de un item por su id
    const moreValue = (id) => {
    //if(value>=0){setValue(value + 1);}
    setItems(prevItems=>
        prevItems.map(i => i.id === id ? {...i,count: i.count + 1}: i)
    )
}
    // funcion para decrementar el conteo de un item por su id
    const lessValue = (id)=>{
        //if(value>0){setValue(value - 1)
        setItems(prevItems=> 
            prevItems.map(i=> 
                i.id === id ? {...i, count: Math.max(i.count-1, 0)}: i)
    )
    }


    return (
        // Provedor del contexto  que pasa el estado (items) y la funcion para actualizarlo (moreValue) a los componentes hijos
        <AppContext.Provider value={{  moreValue, lessValue, addItem, items}}>
            {children}
        </AppContext.Provider>
    )

}
// Exporta el contexto para que este pueda ser utilizafo en otros archivos
export { AppContext }
// Crea un hook personalizado para usar el contexto en los campos funcionales.
export const useAppContext = () => useContext(AppContext)