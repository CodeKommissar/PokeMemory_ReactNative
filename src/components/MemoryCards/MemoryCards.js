import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoryCard from "./MemoryCard/MemoryCard";

export default class MemoryCards extends Component {
  render() {
    return (
      <View>
        <View style={styles.gameStatus}>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </View>
        <View style={styles.gameStatus}>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameStatus: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 8
  },
  text: {
    fontSize: 24
  }
});