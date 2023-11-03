import React from 'react'
import { Text, View, KeyboardAvoidingView, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import InputForm from '../../components/Inputs/InputForm';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';

export default function Password({navigation}) {
  return (
        <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding" 
      keyboardVerticalOffset={50}>
        <Image 
        source={require('../../assets/logo1.png')}
        style={styles.imagestyle}/>
        <View style={styles.viewContent}>
          <InputForm 
          text="No te preocupes, enviaremos un correo de restablecimiento a el correo que nos proporciones para ayudarte a recuperar tu cuenta."
          place="example@example.com"
          />
          <ButtonPrimary 
          navigation={navigation}
          direction={'Login'}
          text="Enviar"
          />
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  imagestyle: {
      width: 150, 
      height:150, 
  },
  viewContent:{
    width:'80%',
    alignItems: 'center',
    marginTop:10,
    backgroundColor:'#fff',
    paddingVertical:20,
    borderRadius:5
  },
  text:{
    fontWeight:'300',
    marginTop:10,
    textDecorationLine:'underline',
    marginRight:'200',
  }
});
