import React from "react";
import {View,Text,StyleSheet} from 'react-native'

export default function InfoProfile(){
    return(
        <View>
        <Text style={{fontSize:14, color:'gray', fontWeight:'bold', padding:15}}>Configuracion de la cuenta</Text>
        <View>
            <Text style={styles.textOptions}>Informacion personal</Text>
            <Text style={styles.textOptions}>Seguridad de la cuenta</Text>
        </View>
        <Text style={{fontSize:14, color:'gray', fontWeight:'bold', padding:15}}>Informacion util</Text>
        <View>
            <Text style={styles.textOptions}>Ayuda</Text>
            <Text style={styles.textOptions}>Colaboradores</Text>
            <Text style={styles.textOptions}>Contribuir</Text>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textButton:{
        fontWeight:'bold',
        color:'#8578b0',
        fontSize:17,
        textAlign:'center'
        },
        textOptions:{
            fontWeight:'400',
            padding:5,
            marginHorizontal:20,
            fontSize:16
        },
})