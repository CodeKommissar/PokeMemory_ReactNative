import React, { Component } from 'react';
import { View } from 'react-native';

import { duplicateArray, shuffleArray, splitArrayInHalf } from "./src/helpers/arrayHelpers";

import Header from "./src/components/Header/Header";
import GameLayout from "./src/components/GameLayout/GameLayout";

export default class App extends Component {
  state = {
    playing: false,
    pokemonList: [
      {
        name: "bulbasaur",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        id: 1
      },
      {
        name: "ivysaur",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        id: 2
      },
      {
        name: "venusaur",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        id: 3
      },
      {
        name: "charmander",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        id: 4
      },
      {
        name: "charmeleon",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        id: 5
      }
    ]
  }

  handleStartGame = () => {
    this.setState({ playing: true })
  }

  prepareCards = (array) => {
    return splitArrayInHalf(shuffleArray(duplicateArray(array)));
  }

  render() {
    return (
      <View>
        <Header />
        <GameLayout 
          playing={this.state.playing}
          onStartGame={this.handleStartGame}
          pokemonList={this.prepareCards(this.state.pokemonList)}
        />
      </View>
    );
  }
}