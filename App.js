import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./src/components/Header/Header";
import GameStatus from "./src/components/GameStatus/GameStatus";
import MemoryCards from "./src/components/MemoryCards/MemoryCards";

export default class App extends Component {
  render() {
    return (
      <View style={styles.game}>
        <Header />
        <GameStatus />
        <MemoryCards />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    backgroundColor: "white"
  }
});