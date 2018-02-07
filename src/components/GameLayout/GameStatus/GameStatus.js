import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GameStatus extends Component {
  render() {
    return (
      <View>
        {this.props.pairsFound === 5 ? (
          <View style={styles.gameStatus}>
            <Text style={styles.victoryMessage}>You won in {this.props.turnNumber} turns!</Text>
            <Button onPress={this.props.onNewGame} title="Play Again?"/>
          </View>
        ) : (
          <View style={styles.gameStatus}>
            <Text style={styles.text}>Turn: {this.props.turnNumber}</Text>
            <Text style={styles.text}>Pairs Found: {this.props.pairsFound}</Text>
          </View>
        )}
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
  },
  victoryMessage: {
    fontSize: 24,
    marginBottom: 8
  }
});