import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Test = ({navigation}) => {
  return (
    <View
      style={styles.hello}>
      <Text>Testing!</Text>
      <Button title="Change Screen" onPress={()=>
    navigation.navigate("Add")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({ 
    hello: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  })

export default Test;