import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MemoryCard from "./MemoryCard/MemoryCard";

export default class CardsRow extends Component {
  render() {
    return (
      <View style={styles.cards}>
        {this.props.pokemonList.map(pokemon => {
          return <MemoryCard pokemon={pokemon} key={pokemon.id} />
        })}
      </View>           
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 24
  }
});