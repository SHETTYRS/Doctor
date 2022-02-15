import React from 'react';
import { Text, StyleSheet, View,TouchableOpacity,Alert,TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


export class Signup extends React.Component{
    static navigationOptions = {
        header:null
    };
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    clearFields=()=>this.setState({username:'',password:''});
    loginsuccess=()=>{
        if(!this.state.username){
            Alert.alert('Please Enter a username');
        }
        else if(!this.state.password){
            Alert.alert('Please Enter a password');
        }
        else if(this.state.username!=='admin' && this.state.password!=='admin' ){
            Alert.alert('login not be done');
        }
        else{
           Alert.alert("Login Successfully");
           this.props.navigate('Menu');
           
        }
    };
        render(){
            return(    
                <View style= {styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text)=>this.setState({username: text})}
                        value={this.state.username}
                        placeholder="Enter the name"
                />
                <TextInput secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(text)=>this.setState({password: text})}
                        value={this.state.password}
                        placeholder="Enter the password"
                />
                    <View style={styles.buttonrow}>
                       <TouchableOpacity style={styles.buttonstyleslogin} onPress={this.loginsuccess}>
                           <Text style={styles.buttonTet}>Login</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.buttonstylescancel} onPress={this.clearFields}>
                           <Text style={styles.buttonTet} >Cancel</Text>
                       </TouchableOpacity>
                    </View>  
                </View>
            );
        }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff'
    },
    buttonrow: {
        paddingTop: 40,
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth:1

    },
    buttonstyleslogin: {
        backgroundColor:'green',
        width:'70%',
        height:'25%',
        justifyContent:'center',
        marginBottom: 20,
        alignItems:'center'
    },
    buttonstylescancel: {
        backgroundColor:'black',
        width:'70%',
        height:'25%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTet: {
        color:'white',
        fontSize: 20
    },
    input: {
        alignItems:'center',
        width:'100%',
        marginTop:30,
        padding:10,
        height: 40,
        borderWidth: 1,
        backgroundColor: 'azure',
        fontSize: 20
    }

});