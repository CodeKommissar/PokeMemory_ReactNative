import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

import MemoryCard from "./MemoryCard/MemoryCard";

export default class MemoryCards extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.cards}>
        {this.props.pokemonList.map(pokemon => {
          return <MemoryCard pokemon={pokemon} key={pokemon.id} />
        })}
      </ScrollView>           
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 8
  },
  text: {
    fontSize: 24
  }
});