import React from "react";
import {View,Text,StyleSheet} from 'react-native'

export default function InfoSection(){
    return(
        <View style={styles.viewSections}>
        <View style={{borderBottomWidth:1, paddingVertical:5}}>
        <Text style={styles.textSubtitle}>Clases</Text>
        </View>
        <Text style={styles.textSection}>Seccion 1 - Instalacion de Android studio (3)</Text>
            <View>
                <Text style={styles.textChapter}>▶ Descargando el SDK de Android Studio</Text>
                <Text style={styles.textChapter}>2. Instalacion del SDK 27</Text>
                <Text style={styles.textChapter}>3. Configuracion de las variables de entorno</Text>
                <View style={{borderBottomWidth:1, paddingVertical:5}}></View>
        <Text style={styles.textSection}>Seccion 2 - Conceptos Basicos (4)</Text>
            <View>
                <Text style={styles.textChapter}>4. Mi primer aplicacion con JAVA</Text>
                <Text style={styles.textChapter}>5. Variables y tipos de datos</Text>
                <Text style={styles.textChapter}>6. Estructuras de control (If y Switch)</Text>
                <Text style={styles.textChapter}>7. Estructuras de control (for, white y do while)</Text>
            </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.compose({
    textSection:{
        fontWeight:'bold',
        marginTop:7,
        fontSize:12, 
        color:'gray'
    },
    textChapter:{
        padding:5,
        fontSize:16
    },
    viewSections:{
        height:400
    },
    textSubtitle:{
        fontSize:18,
        fontWeight:'500',
        color:'black'
    },
    buttonControl:{
        padding:5,
        paddingHorizontal:15,
        borderRadius:3,
        borderWidth:1
    },
})