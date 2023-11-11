import { useContext } from "react";
import { CursoContex } from "../services/context/CursosProvider";

export const useCursos = () =>{
    return useContext(CursoContex);
}
