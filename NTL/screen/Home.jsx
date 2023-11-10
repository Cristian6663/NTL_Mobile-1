
import { TouchableOpacity, Text, TextInput, View, ScrollView, StyleSheet} from 'react-native';
import CourseCard from '../components/Cards/CourseCard';
import CourseCardLong from '../components/Cards/CourseCardLong';
import CardWelcome from '../components/Cards/CardWelcome';
//resources needing
import { Feather } from '@expo/vector-icons';


export default function Home({navigation}) {

  return (
      <View>
        <View style={styles.viewSearch}>
        
        <Feather name="search" size={22} color="black" />
          <TextInput placeholder='Search' style={styles.inputSearch}/>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={{color:'white', fontWeight:'bold'}}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView 
          style={styles.scrollPrincipal}
          showsVerticalScrollIndicator={false}>
          <CardWelcome 
          navigation={navigation}/>
            <Text style={styles.textBody}>Cursos Cristian</Text>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.viewScrollHead}>
                 
            </ScrollView>
            <View >
              <Text style={styles.textAllCourses}>Todos los cursos</Text>
              <CourseCardLong 
              navigation={navigation}
              direction='DetailCourse'
              />
              <CourseCardLong 
              navigation={navigation}
              direction='DetailCourse'
              />
              <CourseCardLong 
              navigation={navigation}
              direction='DetailCourse'
              />
              <CourseCardLong 
              navigation={navigation}
              direction='DetailCourse'
              />
              <CourseCardLong 
              navigation={navigation}
              direction='DetailCourse'
              />
              <CourseCardLong 
              navigation={navigation}
              direction='DetailCourse'
              />
            </View>
          </ScrollView>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  scrollPrincipal:{
    marginBottom:150,
    height:640
  },
  textBody:{
    paddingHorizontal:15,
    fontSize:18,
    fontWeight:'700', 
    textAlign:'center'
  },
  textAllCourses:{
    paddingHorizontal:15,
    fontSize:18,
    fontWeight:'700',
    marginTop:10
  },
  viewSearch:{
    margin:15,
    paddingHorizontal:5,
    flexDirection:'row',
    gap:0,
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10,
  },
  inputSearch:{
    width:'70%',
    padding:10,
    borderRadius:5,
  },
  buttonFilter:{
    backgroundColor:'black',
    padding:8,
    paddingHorizontal:17, 
    borderRadius:8
  }
})