import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import ButtonSecondary from '../../components/buttons/ButtonSecondary';

export default function HomeAuthView({navigation}) {
  return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/logo1.png')}
            style={styles.imagestyle}/>
            <View style={styles.buttonContainer}>
                <ButtonPrimary navigation={navigation} direction={'Login'} text='Iniciar sesion'/>
                <ButtonSecondary navigation={navigation} direction={'Register'} text='Registrarse'/>
            </View> 
            <Text style={{color:'gray', fontWeight:'300', textAlign:'center'}}>NTL Education v1.0</Text>
        </View>
  )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagestyle: {
        width: 150, 
        height:150, 
    },
    buttonContainer: {
        width: '80%',
        marginTop: 20,
        alignItems:'center',
        paddingVertical:20,
        flexDirection: 'column',
    },
  }
);
  
  
