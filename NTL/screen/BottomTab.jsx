import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import MyCourse from "./courses/MyCourse";
import Profile from "./Profile";

//resources needding
import { Feather } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export const BottomTab = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{title:'Cursos',tabBarIcon:() => (<Feather name="youtube" size={24} color="black" />)}}/>
            <Tab.Screen name='MyCourses' component={MyCourse} options={{title:'Mis cursos',tabBarIcon:() => (<Feather name="airplay" size={24} color="black" />)}} />
            <Tab.Screen name='Profile' component={Profile} options={{title:'Cuenta',tabBarIcon:() => (<Feather name="user" size={24} color="black" />)}} />
        </Tab.Navigator>
    )
}