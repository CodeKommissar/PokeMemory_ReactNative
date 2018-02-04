import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>PokeMemory!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#192653',
  },
  text: {
    fontFamily: "signika",
    fontWeight: 'bold',
    color: "#FFCB05",
    fontSize: 40,
    padding: 8
  }
});
