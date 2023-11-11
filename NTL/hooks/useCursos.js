import { useContext } from "react";
import { CursoContex } from "../services/context/CursosProvider";

const useCursos = () =>{
    return useContext(CursoContex);
}

export default useCursos