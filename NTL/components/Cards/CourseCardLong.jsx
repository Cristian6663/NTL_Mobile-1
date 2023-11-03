import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CourseCardLong({navigation, direction, price = '200.00 MXN'}) {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate(direction)}}>
        <View style={styles.containerCard}>
            <View style={styles.viewImage}>
                
            </View>
            <View>
                <Text style={styles.textTitle}>Android Studio: DESDE CERO</Text>
                <Text style={styles.textDescription}>Aprende  utilzar el IDE mas usado para el desarrollo movil</Text>
                <Text style={styles.textImparted}>Impartido por: 
                    <Text style={styles.textTeacher}> Marco Huitron</Text>
                </Text>
                <View style={styles.viewPrice}>
                    <Text style={styles.textPrice}>{price}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    containerCard:{
        padding:15,
        borderRadius:5,
        width:'auto',
        flexDirection:'row'
    },
    viewPrice:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textTitle:{
        fontWeight:'bold',
        fontSize:16,
    },
    textImparted:{
        color:'gray',
        fontSize:12
    },
    textTeacher:{
        color:'gray',
        fontWeight:'400',
        fontSize:12
    },
    textPrice:{
        fontWeight:'bold'
    },
    textDescription:{
    fontWeight:'400',
    color:'gray',
    width:'60%'
    },
    viewImage:{
        width:100,
        marginRight:10,
        backgroundColor:'#8578b0',
        borderRadius:2,
        height:100,
        marginBottom:2,
    }
});
