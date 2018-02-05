import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import MemoryCards from "./MemoryCards/MemoryCards";
import GameStatus from "./GameStatus/GameStatus";

export default class GameLayout extends Component {
  render() {
    const rows = this.props.pokemonList.map((row, i) => {
      return <MemoryCards pokemonList={row} key={i} /> 
    })

    const game = (
      <View>
        <GameStatus />
        {rows}
      </View>
    )

    return (
      <ScrollView contentContainerStyle={styles.gameLayout}>
        {this.props.playing 
            ? game
            : <Button onPress={this.props.onStartGame} title="Start Game"/>
        }
      </ScrollView>           
    );
  }
}

const styles = StyleSheet.create({
  gameLayout: {
    justifyContent: 'center',
    flexDirection: 'column',
  }
});