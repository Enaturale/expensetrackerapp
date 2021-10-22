import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View
      style={styles.screen}>
     

       <View
        style={styles.colorRed}>
        <Text>1</Text>
      </View> 

      <View
        style={styles.colorPink}>
        <Text>2</Text>
      </View> 

       <View
        style={styles.colorGreen}>
        <Text>3</Text>
      </View> 
      {/* <Text>Hello</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row', 
    width: '80%', 
    height: 300, 
    justifyContent: 'space-between', 
    alignItems: 'stretch'
  },

  colorRed:{
    backgroundColor: 'red',
    //  width: 100,
    //  height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPink:{
    backgroundColor: 'pink',
    // width: 100,
    // height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorGreen:{
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50,
    alignItems: 'center'
  },

  input: { width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10 }

});
