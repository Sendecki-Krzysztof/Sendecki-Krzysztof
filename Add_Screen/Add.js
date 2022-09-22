import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function getRandomLimit(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const Testing = ({navigation}) => {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [ID, setID] = useState('');

  const handleButton = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleConfirmButton = () => {
    var temp = getRandomLimit(60, 80);
    var numPeople = getRandomLimit(0, 4);
    console.log(temp);
    console.log(numPeople);
    console.log(ID);
    navigation.navigate("Test")
  };
  return (
    <View style={styles.inputSensorText}>
      
      <TextInput style={styles.inputSensorID} 
      maxLength = {8}
        placeholder="01234567" 
        keyboardType="numeric"
        value={ID}
        onChangeText={setID}>
      </TextInput>
      <Button title="Enter" onPress={handleButton}></Button>

      <Modal transparent={true} visible={isPopupVisible}> 
      <View style={styles.popUpBackground}>
        <View style={styles.popUpBox}>
          <Text style= {styles.popUpFont}>ID: {ID}</Text>
          <View style = {styles.lineStyle} />
          <Text style = {styles.confirmText}>Is this the correct sensor ID?</Text>
         
          <View style={styles.confirmInfo}>

            <Button 
              style = {styles.backButton} 
              title="Back" 
              onPress={handleButton}>
            </Button>

            <Button 
              style = {styles.confirmButton} 
              title="Confirm"  
              onPress={handleConfirmButton}>
            </Button>

          </View>
        </View>
      </View>
      </Modal>
    

    </View>
  )
}

const styles = StyleSheet.create({ 
  inputSensorText: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'row'
    },
    inputSensorID: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      minHeight: 40,
      minWidth: 110,
    },
    confirmInfo: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexDirection: 'row'
    },
    popUpBox: {
      backgroundColor: "#FFF",
      margin: 50,
      marginBottom: 150,
      marginTop: 150,
      padding: 40,
      borderRadius: 10,
      flex: 1
    },
    popUpBackground: {
      backgroundColor:"#000000aa", 
      flex: 1,
    },
    popUpFont: {
      fontSize: 30,
      textAlign: 'center',
    },
    lineStyle: {
      borderWidth: 1,
      borderColor:'black',
   },
   confirmButton: {
    bottom: 10, 
    right: 10 
   }, 
   backButton: {
    bottom: 10, 
    left: 10, 
   },
   confirmText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
   }
  })

export default Testing;