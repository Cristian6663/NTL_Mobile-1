import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function LinkName({name, navigation, direction}) {
  return (
    <TouchableOpacity 
    style={styles.viewName}
    onPress={() => {navigation.navigate(direction)}}
    >
        <Text style={styles.textLink}> {name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textLink:{
        color:'#8578b0',
        fontWeight:'600'
    },
    viewName:{
    }
})
