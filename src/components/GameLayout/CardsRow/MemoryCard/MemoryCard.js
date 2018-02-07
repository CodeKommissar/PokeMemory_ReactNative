import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class MemoryCard extends Component {
  formatPokemonName = string => {
    return (string.charAt(0).toUpperCase() + string.slice(1)).split("-")[0];
  }

  render() {
    return (
      <View>
        <TouchableOpacity 
          onPress={() => this.props.onFlipCard(this.props.pokemon)} 
          style={styles.card}
          disabled={this.props.pokemon.imageUp || this.props.pokemon.matched}
        >
          {this.props.pokemon.imageUp || this.props.pokemon.matched ? (
            <Image 
              source={
                {uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.url.split("/")[6]}.png`}
              }
              style={styles.sprite}
            />
          ) : (
            <Image 
              source={require('../../../../images/pokemon_card.jpg')}
              style={styles.sprite}
            />
          )}
          <Text style={this.props.pokemon.matched ? styles.displayText : styles.hideText}>
            {this.formatPokemonName(this.props.pokemon.name)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center'
  },
  sprite: {
      width: 160,
      height: 160,
      marginLeft: 8,
      marginRight: 8,
  },
  displayText: {
    fontSize: 24,
    marginTop: -8,
    opacity: 1
  },
  hideText: {
    fontSize: 24,
    marginTop: -8,
    opacity: 0
  }
});