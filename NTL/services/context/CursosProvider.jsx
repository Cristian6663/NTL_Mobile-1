import { createContext, useEffect } from "react";
import { useState } from "react";

const CursoContext = createContext();




const CursosProvider = ({children}) => {
    const hola ="hola"

    return(
        <CursoContext.Provider
        value={{
            hola
        }}
        >{children}</CursoContext.Provider>
    )
}
export{
    CursosProvider
   
}
export default CursoContext