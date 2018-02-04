import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MemoryCard extends Component {
  render() {
    return (
      <View>
        <Image 
            source={require("../../../images/pokemon_card.jpg")}
            style={styles.card}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
      width: 160,
      height: 160,
      margin: 8
  }
});