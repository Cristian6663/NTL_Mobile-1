import React from "react";
import {View,Text,StyleSheet} from 'react-native'

export default function InfoDescri(){
    return(
        <View style={{marginBottom:20}}>
                <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Descripcion:</Text>
                <View >
                    <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima hic distinctio atque, dolorum accusamus earum eligendi fuga soluta perspiciatis amet rem maxime possimus doloribus aspernatur quaerat a excepturi quibusdam dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsa eligendi est accusamus, et quia cupiditate modi tempora eos omnis laudantium earum sunt ad at sint placeat inventore. Exercitationem, atque...
                    <Text style={{color:'#8578b0', fontWeight:'bold', fontSize:15}}> Ver mas</Text>
                </Text>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textRequire:{
        color:'gray',
        fontWeight:'400',
        fontSize:15,
        marginBottom:2
    },
})