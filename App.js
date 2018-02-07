import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';

import {
  addPropertiesToArray,
  duplicateArray,
  shuffleArray
} from "./src/helpers/arrayHelpers";

import Header from "./src/components/Header/Header";
import GameLayout from "./src/components/GameLayout/GameLayout";

export default class App extends Component {
  state = {
    playing: false,
    turnNumber: 1,
    pairsFound: 0,
    numClicksWithinTurn: 0,
    pokemonList: [],
    firstPokemonSelected: "",
    secondPokemonSelected: "",
  }

  handleStartGame = async () => {
    const allPokemon = await AsyncStorage.getItem('allPokemon');
    if (allPokemon) {
      const allPokemonList = JSON.parse(await AsyncStorage.getItem('allPokemon'));
      const pokemonList = this.prepareCards(this.selectFivePokemon(allPokemonList));
      this.setState({ pokemonList, playing: true })
    } else {
      try {
        const pokeapiResponse = await fetch("https://cors.now.sh/https://pokeapi.co/api/v2/pokemon/?limit=802");
        const allPokemonData = await pokeapiResponse.json();
        const allPokemonListString = await JSON.stringify(allPokemonData.results);
        await AsyncStorage.setItem('allPokemon', allPokemonListString);
        const allPokemonList = JSON.parse(await AsyncStorage.getItem('allPokemon'));
        const pokemonList = this.prepareCards(this.selectFivePokemon(allPokemonList));
        this.setState({ pokemonList, playing: true })
      } catch (error) {
        alert("There was an error fetching the pokemon list");
      }
    }
  }

  handleNewGame = () => {
    this.setState({
      playing: false,
      turnNumber: 1,
      pairsFound: 0,
      numClicksWithinTurn: 0,
      pokemonList: [],
      firstPokemonSelected: "",
      secondPokemonSelected: "",
    })
  }

  selectFivePokemon = (array) => {
    const randomNumber = Math.floor(Math.random() * (array.length - 5))
    return array.slice(randomNumber, (randomNumber + 5));
  }

  prepareCards = (array) => {
    return shuffleArray(addPropertiesToArray(duplicateArray(array)));
  }

  handleFlipCard = (pokemonCard) => {
    this.setState((prevState) => {
      if (prevState.numClicksWithinTurn === 0) {
        return {
          numClicksWithinTurn: 1,
          firstPokemonSelected: pokemonCard.name,
          pokemonList: prevState.pokemonList.map(pokemon => {
            if (pokemonCard.id === pokemon.id) {
              return { ...pokemon, imageUp: true }
            } else {
              return { ...pokemon, imageUp: false }
            }
          })
        }
      } else if (prevState.numClicksWithinTurn === 1) {
        if (prevState.firstPokemonSelected === pokemonCard.name) {
          return {
            numClicksWithinTurn: 0,
            turnNumber: prevState.turnNumber + 1,
            pairsFound: prevState.pairsFound + 1,
            pokemonList: prevState.pokemonList.map(pokemon => {
              if (pokemon.name === pokemonCard.name) {
                return { ...pokemon, imageUp: true, matched: true }
              } else {
                return pokemon;
              }
            })
          }
        } else {
          return {
            numClicksWithinTurn: 0,
            turnNumber: prevState.turnNumber + 1,
            pokemonList: prevState.pokemonList.map(pokemon => {
              if (pokemonCard.id === pokemon.id) {
                return { ...pokemon, imageUp: true }
              } else {
                return pokemon;
              }
            })
          }
        }
      }
    })
  }


  render() {
    return (
      <View>
        <Header />
        <GameLayout
          playing={this.state.playing}
          turnNumber={this.state.turnNumber}
          pairsFound={this.state.pairsFound}
          onStartGame={this.handleStartGame}
          pokemonList={this.state.pokemonList}
          onFlipCard={this.handleFlipCard}
          onNewGame={this.handleNewGame}
        />
      </View>
    );
  }
}