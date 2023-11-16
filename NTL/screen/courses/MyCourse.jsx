import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CourseCardLong from '../../components/Cards/CourseCardLong';


export default function MyCourse({navigation,}) {
  return (
    <View>
      <Text style={styles.textTitle}>Todos mis cursos</Text>
      <ScrollView style={{marginBottom:50}}>
        <CourseCardLong
        navigation={navigation}
        direction={'PlayCourse'}
        price='Matriculado'
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textTitle:{
    fontSize:18, 
    fontWeight:'bold',
    paddingHorizontal:15,
    marginTop:15,
    paddingVertical:7,
  }
})
