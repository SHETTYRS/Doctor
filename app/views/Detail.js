import React from "react";
import { Alert,  StyleSheet, Text,View,TouchableOpacity,Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
export class Detail extends React.Component{
    constructor(props){
        super(props);
        
    };
    render(){
        const {selectedItem} = this.props.route.params;
        return(
            <View style={styles.container}>
              <Image style={styles.imagestyle} source={selectedItem.image}/>  
            </View>
        )
        
    }
}
const styles = StyleSheet.create ({
    container: {
       alignItems: 'center'
    },
    imagestyle:
    {
       width:'100%',
       height:'100%',
       borderRadius:15,
       padding:10
    }
 });
