import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MemoryCard extends Component {
  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image 
            source={{uri: this.props.pokemon.sprite}}
            style={styles.sprite}
        />
        <Text style={styles.text}>
          {this.capitalizeFirstLetter(this.props.pokemon.name)}
        </Text>
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
  text: {
    fontSize: 24,
    marginTop: -8,
    opacity: 0
  }
});