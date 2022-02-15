import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
     }

     toggleUser = ()=>{
         this.setState(previousState => {
             return{ isLoggedIn: !previousState.isLoggedIn };
         });
     }

     render() {
         let display = this.state.isLoggedIn ? 'Raghu' : this.props.message;
         return(
             <View style={styles.headerText}>

                    <Text style={styles.headerstyle}
                    onPress={this.toggleUser}>{display}</Text>

             </View>
         ); 
     }

}
const styles = StyleSheet.create({
    headerstyle:{
        textAlign:'center',
        color: '#ffffff',
        fontSize: 30
    },
    headerText:{
        paddingTop: 20,
        paddingBottom:10,
        paddingRight:20,
        backgroundColor:'#35605a'
    }
    
});