import React from "react";
import { Alert, FlatList, StyleSheet, Text,View,TouchableOpacity,Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
export class Mobile extends React.Component{


    render(){
        return(
            <View style={styles.container}>
      <FlatList style={styles.itemsmobile}
        data={[
          {key: 'Apple'},
          {key: 'One Plus'},
          {key: 'Samsung'},
          {key: 'Redmi'},
          {key: 'Vivo'},
          {key: 'Oppo'},
          {key: 'Nokia'},
          {key: 'Black Berry'}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemsmobile:{

    }
  });
  