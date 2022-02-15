import React, { Component } from "react";
import { StyleSheet, View, Text, Image ,TouchableOpacity} from "react-native";

function AppointmentDetails(props) {
  return (
    <View style={styles.container}>
        <View style={styles.rectStackColumn}>
            <View style={styles.rectStack}>
                <View style={styles.rect}>
                    <Image source={require('../../assets/images/patient.png')}
                            resizeMode="contain" style={styles.image}>
                    </Image>
                    <Text style={styles.nametext}>Karan</Text>
                    <Text style={styles.agetext}>23</Text>
                        <View style={styles.buttonInfoRow}>
                            <TouchableOpacity style={styles.callbutton}>
                            <Text style={styles.buttonTet}>Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.navigatebutton}>
                            <Text style={styles.buttonTet} >Navigate</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.watsappbutton}>
                            <Text style={styles.buttonTet}>Whatsapp</Text>
                        </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
                        <TouchableOpacity style={styles.lastbutton}>
                            <Text style={styles.buttonTet}>Give prescription</Text>
                        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 1,
    width: 365,
    height: 232,
    position: "absolute",
    backgroundColor: "white",
    borderColor: 'black',
  },
nametext: {
    width: 70,
    height: 19,
    left: 118,
    top: 45,
    fontWeight: 'bold',
    lineHeight: 26,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#4F4F4F',
    textAlign: 'center',
    fontSize:20,
  },
agetext: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 138,
    top: 55,
    fontSize:20,
  },
  buttonInfoRow:{
  height: 44,
    flexDirection: "row",
    marginTop: 130,
    marginLeft: 15,
    marginRight: 4
},
  callbutton: {
    backgroundColor:'#27AE60',
    height: 30,
    width: 100,
    textAlign: 'center',
    borderRadius: 8,
    fontSize:16,
  },
  navigatebutton: {
    backgroundColor:'#2F80ED',
    height: 30,
    width: 100,
    marginLeft: 16,
    borderRadius: 8,
    fontSize:16,
  },
  watsappbutton: {
    backgroundColor:'#9B51E0',
    height: 30,
    width: 100,
    marginLeft: 14,
    borderRadius: 8,
    fontSize:16,
  },
  cupertinoButtonInfoRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 12,
    marginRight: 13
  },
  image: {
    top: 30,
    left: 15,
    width: 94,
    height: 120,
    position: "absolute"
  },
  rectStack: {
    width: 356,
    height: 232
  },
  
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 5
  },
  addMedicineRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 14,
    marginRight: 212
  },
  
  
  buttonTet: {
    color:'white',
    fontSize: 20,
    textAlign:'center'
},
  
  rectStackColumn: {
    marginTop: 110,
    marginLeft: 10,
    marginRight: 9
  },
  lastbutton: {
    height: 44,
    width: 370,
    marginTop: 323,
    marginLeft:10,
    backgroundColor:'#F2994A',
    borderRadius: 5,
  },
});

export default AppointmentDetails;
