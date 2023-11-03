import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import LinkName from '../../components/links/LinkName';

export default function DetailCourse({navigation}) {
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.viewImg}>
                <Text>Imagen descriptiva</Text>
            </View>
            <View style={styles.containerCard}>
                <Text style={styles.textTitle}>Android Studio: DESDE DE CERO</Text>
                <Text style={styles.textDescription}>Aprende a utilizar el IDE mas usado en el desarrolo de aplicaciones para android nativas</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.textMake}>Creado por</Text>
                <LinkName 
                    name="Marco Antonio"
                    navigation={navigation}
                    direction='TeacherProfile'
                    />
                </View>
                <View style={styles.containerPressPrice}>
                    <View style={styles.viewPrice}>
                        <Text style={{fontSize:24, fontWeight:'bold'}}>175.00 MXN </Text>
                        <Text style={{fontSize:18, color:'gray', textDecorationLine:'line-through'}}>399.00 MXN</Text>
                    </View>
                    <View style={styles.button}>
                        <ButtonPrimary 
                        text='Comprar curso'
                        navigation={navigation}
                        direction={'PlayCourse'}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Lo que aprenderas:</Text>
                    <View>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Instalacion de Android studio en cualquier entorno</Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Utilizar buenas practicas en el desarrollo movil </Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Aprende Kotlin y sus utilidades en el desarrollo</Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Crear tu primer aplicacion movil para tu CV</Text>
                        <Text style={{color:'#8578b0', fontWeight:'bold', fontSize:15}}> Ver mas</Text>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Contenido del curso:</Text>
                    <View style={styles.viewSection}>
                        <TouchableOpacity style={styles.buttonSection}>
                            <Text style={{fontWeight:'700'}}>Seccion 1 - </Text>
                            <Text style={{fontWeight:'700'}}>Instalacion de Android Studio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSection}>
                            <Text style={{fontWeight:'700'}}>Seccion 2 - </Text>
                            <Text style={{fontWeight:'700'}}>Conceptos Basicos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSection}>
                            <Text style={{fontWeight:'700'}}>Seccion 3 - </Text>
                            <Text style={{fontWeight:'700'}}>Primer proyecto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSection}>
                            <Text style={{fontWeight:'700'}}>Seccion 4 - </Text>
                            <Text style={{fontWeight:'700'}}>Base de datos SQLite</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSection}>
                            <Text style={{fontWeight:'700'}}>Seccion 5 - </Text>
                            <Text style={{fontWeight:'700'}}>Construyendo las pantallas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSection}>
                            <Text style={{fontWeight:'700'}}>Seccion 6 - </Text>
                            <Text style={{fontWeight:'700'}}>Deploy del proyecto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Requisitos:</Text>
                    <View>
                        <Text style={styles.textRequire}> - Fundamentos de programacion</Text>
                        <Text style={styles.textRequire}> - Internet</Text>
                        <Text style={styles.textRequire}> - Navegador</Text>
                        <Text style={styles.textRequire}> - Editor de codigo (VSCODE preferencial)</Text>
                        <Text style={styles.textRequire}> - Conocer fundamentos de base de datos SQL</Text>
                        <Text style={{color:'#8578b0', fontWeight:'bold', fontSize:15}}> Ver mas</Text>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Descripcion:</Text>
                    <View >
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima hic distinctio atque, dolorum accusamus earum eligendi fuga soluta perspiciatis amet rem maxime possimus doloribus aspernatur quaerat a excepturi quibusdam dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsa eligendi est accusamus, et quia cupiditate modi tempora eos omnis laudantium earum sunt ad at sint placeat inventore. Exercitationem, atque...
                        <Text style={{color:'#8578b0', fontWeight:'bold', fontSize:15}}> Ver mas</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    viewImg:{
        height:200,
        margin:10,
        borderRadius:5,
        borderWidth:1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center'
    },
    containerCard:{
        marginHorizontal:10
    },
    textTitle:{
        fontSize:24,
        marginBottom:2
    },
    textDescription:{
        fontSize:16,
        color:'black',
        fontWeight:'300',
        marginBottom:5
    },
    button:{
        alignItems:'center',
        marginBottom:20
    },
    textMake:{
        color:'gray',
        marginBottom:7
    },
    viewPrice:{
        flexDirection:'row',
        alignItems:'center'
    },
    viewSection:{
        gap:7
    },
    buttonSection:{
        flexDirection:'row',
        padding:10,
        borderRadius:3,
        borderWidth:1,
        paddingHorizontal:15
    },
    textRequire:{
        color:'gray',
        fontWeight:'400',
        fontSize:15,
        marginBottom:2
    },
    
})
