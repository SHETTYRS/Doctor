import React from "react";
import { Alert,  StyleSheet, Text,View,TouchableOpacity,Image, FlatList,ScrollView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
export class Fruits extends React.Component{

    state = {
        names: [
           {
              id: 0,
              image: require('../sections/img/apple.jpg'),
              name: 'Apple',
           },
           {
              id: 1,
              image: require('../sections/img/apple.jpg'),
              name: 'Banana',
           },
           {
              id: 2,
              image: require('../sections/img/apple.jpg'),
              name: 'Kiwi',
           },
           {
              id: 3,
              image: require('../sections/img/apple.jpg'),
              name: 'Orange',
           }
        ]
     }
     onclickimage = (item) => {
      this.props.navigation.navigate('Detail',{selectedItem:item});     
      
     }
     render() {
        return (
           <View >
              <FlatList  data={this.state.names} keyExtractor={item=>item.id} 
              renderItem={({item})=>
            <TouchableOpacity style={styles.container} onPress={()=>this.onclickimage(item)}>
               <Image source={item.image}/>
               <Text>{item.name}</Text>
            </TouchableOpacity>}
              />
                    
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
        width:'75%',
        height:'30%',
        borderRadius:15,
        padding:10
     }
  });
