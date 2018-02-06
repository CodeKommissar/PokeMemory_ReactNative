import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';

import { splitArrayInHalf } from "../../helpers/arrayHelpers";

import CardsRow from "./CardsRow/CardsRow";
import GameStatus from "./GameStatus/GameStatus";

export default class GameLayout extends Component {
  render() {
    const { pokemonList, turnNumber, pairsFound, playing, onStartGame } = this.props;

    const pokemonListHalf = splitArrayInHalf(pokemonList);

    const cardsRow = pokemonListHalf.map((row, i) => {
      return <CardsRow pokemonList={row} key={i} onFlipCard={this.props.onFlipCard} /> 
    })

    const gameLayout = (
      <View>
        <GameStatus turnNumber={turnNumber} pairsFound={pairsFound} />
        {cardsRow}
      </View>
    )

    return (
      <ScrollView contentContainerStyle={styles.gameLayout}>
        {playing 
            ? gameLayout
            : <Button onPress={onStartGame} title="Start Game"/>
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