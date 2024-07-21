/* La Context API permite compartir datos a través de la aplicación sin tener que pasar props manualmente a cada nivel de la jerarquía. */

import {createContext, useState, useContext} from 'react'

const AppContext = createContext();

export const AppProvider = ({children})=> {
    // inicializamos nuestro estado y el actualizador en 0
    const [value, setvalue]= useState(0);

    const moreValue=()=>{
        setvalue(value + 1);
    }
    return(
        <AppContext.Provider valor={{value, moreValue}}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => useContext(AppContext)