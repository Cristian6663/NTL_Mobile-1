import React from "react";

const CursoContext = React.createContext();

const CursosProvider = ({children}) => {
    const hola ="hola";

    return(
        <CursoContext.Provider
        value={
            hola
        }
        >{children}</CursoContext.Provider>
    )
}
export {CursoContext, CursosProvider}