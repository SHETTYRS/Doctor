import React from "react";
import { Alert,  StyleSheet, Text,View,TouchableOpacity,Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
export class Menu extends React.Component{
    
    static navigationOptions = {
        header:null
    };

    listofmobiles=()=>{
        this.props.navigation.navigate('Mobile');
    };
    listoffruits=()=>{
        this.props.navigation.navigate('Fruits');
    };

    render(){   
        return(
            <View>
                
                   <View style={styles.buttonrow}>

                       <Image style={styles.imagemobile}
                       source={ require('../sections/img/mobile.png')}>
                       </Image>
                       <TouchableOpacity style={styles.buttonstylesmobiles} onPress={this.listofmobiles}>
                           <Text style={styles.buttonTet}>MOBILES</Text>
                       </TouchableOpacity>
                       <Image style={styles.imagefruit}
                       source={ require('../sections/img/fruit1.png')}>
                       </Image>
                       <TouchableOpacity style={styles.buttonstylesfruits} onPress={this.listoffruits}>
                           <Text style={styles.buttonTet}>FRUITS</Text>
                       </TouchableOpacity>
                    </View> 
            </View>
        )


     }
}
const styles = StyleSheet.create({
    buttonrow: {
        paddingTop: 30,
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth:1

    },
    buttonstylesmobiles: {
        backgroundColor:'green',
        width:'60%',
        height:'10%',
        justifyContent:'center',
        marginBottom: 20,
        alignItems:'center'
    },
    buttonstylesfruits: {
        backgroundColor:'orange',
        marginTop: 20,
        width:'60%',
        height:'10%',
        justifyContent:'center',
        marginBottom: 20,
        alignItems:'center'
    },
    buttonTet: {
        color:'white',
        fontSize: 20
    },
    imagemobile:{
        width:'100%',
        height:'35%'

    },
    imagefruit:{
        marginBottom: 20,
        width:'75%',
        height:'30%',
        borderRadius:15,
        padding:10,
        backgroundColor:'white'

    }

});