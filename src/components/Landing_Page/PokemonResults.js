import React from 'react';
import { useSelector } from '../../hooks/appContext';
import { getPokemon } from '../../selectors/selectors';
import styles from './PokemonResults.css';



const PokemonResults = () => {
  const pokemonList = useSelector(getPokemon);
  //gets initial list of 1st 20 pokemon from the api 
  
  //maps through pokemon list and creates individual cards for them with hyperlinks
  const fetchedPokemon = pokemonList.map(({_id, pokemon, url_image}) =>{ return (
    <li >
      <div id={_id} name='pokemon_id' className={styles.pokemon_card_container}>
        <img src={url_image} className={styles.pokemon_image}/>
        <a href={`http://localhost:7891/${_id}`}>{pokemon}</a>
      </div>
    </li>
  )})

  return (
    <ul className={styles.list}>
      {fetchedPokemon}
    </ul>
  )
}

export default PokemonResults;