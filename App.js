import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from './src/components/DataInput/DataInput'

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TextInput/>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    backgroundColor: 'black',
    
  },
});
