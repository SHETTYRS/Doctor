import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const PatientTab = () => {
  return (
    <View>
      <Text style={styles.Textstyle}>All Patients</Text>
      <View style={styles.ReactangleWrapper}>
        <Text style={styles.Patientnames}>Patient 1</Text>
      </View>
      <View style={styles.ReactangleWrapper}>
        <Text style={styles.Patientnames}>Patient 2</Text>
      </View>
      <View style={styles.ReactangleWrapper}>
        <Text style={styles.Patientnames}>Patient 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Textstyle:{
    fontSize: 18,
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'}
  },
  Patientnames:{
    marginTop:10,
    left:10,
    fontSize: 20,
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'}
  },

  ReactangleWrapper: {
    width: '90%',
    height: 51,
    marginTop: 20,
    marginBottom: 10,
    left:12,
    backgroundColor: '#F8F5F5',
    borderRadius: 0.5,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8
  },
  
});


export default PatientTab;
