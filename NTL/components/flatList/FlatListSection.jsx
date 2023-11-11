import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function FlatListSection() {
  return (
    <TouchableOpacity style={styles.buttonSection}>
        <Text style={{fontWeight:'700'}}>Seccion 1 - </Text>
        <Text style={{fontWeight:'700'}}>Instalacion de Android Studio</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttonSection:{
        flexDirection:'row',
        padding:10,
        borderRadius:3,
        borderWidth:1,
        paddingHorizontal:15
    },
})


