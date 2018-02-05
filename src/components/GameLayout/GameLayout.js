import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MemoryCards from "./MemoryCards/MemoryCards";

export default class GameLayout extends Component {
  render() {
    const rows = this.props.pokemonList.map((row, i) => {
      return <MemoryCards pokemonList={row} key={i} /> 
    })

    return (
      <View style={styles.gameLayout}>
        {this.props.playing 
            ? rows
            : <Button onPress={this.props.onStartGame} title="Start Game"/>
        }
      </View>           
    );
  }
}

const styles = StyleSheet.create({
  gameLayout: {
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 8
  },
  text: {
    fontSize: 24
  }
});