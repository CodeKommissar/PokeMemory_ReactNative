import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';

import CardsRow from "./CardsRow/CardsRow";
import GameStatus from "./GameStatus/GameStatus";

export default class GameLayout extends Component {
  render() {
    const cardsRow = this.props.pokemonList.map((row, i) => {
      return <CardsRow pokemonList={row} key={i} /> 
    })

    const gameLayout = (
      <View>
        <GameStatus />
        {cardsRow}
      </View>
    )

    return (
      <ScrollView contentContainerStyle={styles.gameLayout}>
        {this.props.playing 
            ? gameLayout
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