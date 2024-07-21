/* La Context API permite compartir datos a través de la aplicación sin tener que pasar props manualmente a cada nivel de la jerarquía. */

// importar funciones necesarias desde React
import { createContext, useState, useContext } from 'react'
// Crear el contexto. este sera el contenedor de los datos que queremos compartir.
const AppContext = createContext();

// crear el provedor del contexto que envuelve los componentes hijos y proporciona el estado y las funciones.

export const AppProvider = ({ children }) => {
    // inicializamos nuestro estado y una funcion para actualizarlo.
    const [value, setValue] = useState(0);
    // funcion para incrementar el valor en 1
    const moreValue = () => {
        setValue(value + 1);
    }
    return (
        // Provedor del contexto  que pasa el estado (value) y la funcion para actualizarlo (moreValue) a los componentes hijos
        <AppContext.Provider value={{ value, moreValue }}>
            {children}
        </AppContext.Provider>
    )

}
// Exporta el contexto para que este pueda ser utilizafo en otros archivos
export { AppContext }
// Crea un hook personalizado para usar el contexto en los campos funcionales.
export const useAppContext = () => useContext(AppContext)