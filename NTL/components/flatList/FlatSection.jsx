import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native'

export default function FlatSection({}) {
  const [openChapter, setOpenChapter] = useState('none');
  console.log(openChapter)
  const handleOpen = () => {
   
  }
  return (
    <TouchableOpacity style={styles.buttonSection} onPress={() => handleOpen()}>
        <Text style={{fontWeight:'700'}}>Instalacion de Android Studio</Text>
        <View style={{display:openChapter}}>
          <Text>Capitulo</Text>
          <Text>Capitulo</Text>
          <Text>Capitulo</Text>
          <Text>Capitulo</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttonSection:{
        flexDirection:'row',
        padding:10,
        borderRadius:3,
        borderWidth:1,
        paddingHorizontal:15,
        display: 'flex',
        flexDirection:'column'
    },
    capitulos:{
      display:'none'
    }
})
