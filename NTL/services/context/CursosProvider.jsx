import React from "react";

const CursoContext = React.createContext();

const CursosProvider = ({children}) => {
    const hola ="saludito";

    return(
        <CursoContext.Provider
        value={
            {hola}
        }
        >{children}</CursoContext.Provider>
    )
}
export {CursosProvider}
export default CursoContext