import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default function InfoRequisit() {
    return(
        <View style={{marginBottom:20}}>
                    {/*Requisitos coding  */}
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Requisitos:</Text>
                    <View>
                        <Text style={styles.textRequire}> - Fundamentos de programacion</Text>
                        <Text style={styles.textRequire}> - Internet</Text>
                        <Text style={styles.textRequire}> - Navegador</Text>
                        <Text style={styles.textRequire}> - Editor de codigo (VSCODE preferencial)</Text>
                        <Text style={styles.textRequire}> - Conocer fundamentos de base de datos SQL</Text>
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