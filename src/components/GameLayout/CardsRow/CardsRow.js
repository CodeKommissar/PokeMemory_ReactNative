import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MemoryCard from "./MemoryCard/MemoryCard";

export default CardsRow = (props) => {
    return (
      <View style={styles.cards}>
        {props.pokemonList.map(pokemon => {
          return <MemoryCard 
            pokemon={pokemon} 
            key={pokemon.id}
            onFlipCard={props.onFlipCard} 
          />
        })}
      </View>           
    );
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