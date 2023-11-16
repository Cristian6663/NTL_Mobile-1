import React from 'react'
import { View,Text,StyleSheet } from "react-native";

export default function InfoContainer(){
    return(
        <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Lo que aprenderas:</Text>
                    <View>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Instalacion de Android studio en cualquier entorno</Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Utilizar buenas practicas en el desarrollo movil </Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Aprende Kotlin y sus utilidades en el desarrollo</Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Crear tu primer aplicacion movil para tu CV</Text>
                        <Text style={{color:'#8578b0', fontWeight:'bold', fontSize:15}}> Ver mas</Text>
                    </View>
                </View>
    )
}
const styles = StyleSheet.create({
    textRequire:{
        color:'gray',
        fontWeight:'400',
        fontSize:15,
        marginBottom:2
    },
    
})