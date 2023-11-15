import axios from 'axios';
import React from 'react'

const AuthContext = React.createContext();


const AuthProvider = ({children}) =>{
    
    {/*
const peticion = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(res =>{})
        
    } */}
    
    return(
        
        <AuthContext.Provider
            value={{
                
            }}
        >{children}</AuthContext.Provider>
    )
}