import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GameStatus extends Component {
  render() {
    return (
      <View style={styles.gameStatus}>
        <Text style={styles.text}>Turn: {this.props.turnNumber}</Text>
        <Text style={styles.text}>Pairs Found: {this.props.pairsFound}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8
  },
  text: {
    fontSize: 24
  }
});