import React from 'react';
import {  View } from 'react-native';
import { Header } from '../sections/Header.js';
import { Signup } from '../sections/Signup.js';




export class Login extends React.Component{

    render(){
        const { navigate} = this.props.navigation;
        return(
            <View >
                <Header message = 'AwesomeProject' />
                <Signup navigate = {navigate}/>
            </View>

        );
    }
}