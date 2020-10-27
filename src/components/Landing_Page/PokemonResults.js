import React from 'react';
import { useSelector } from '../../hooks/appContext';
import { getPokemon } from '../../selectors/selectors';


const PokemonResults = () => {
  const pokemonList = useSelector(getPokemon);
  //gets initial list of 1st 20 pokemon from the api 

 
}