import { get } from './requests';

export const fetchPokemonFromApi = (page) => {
  return get(`sort=pokemon&page=${page}`)
  .then(results => results.results)
  .then(pokemonList => pokemonList.map(({ _id, pokemon }) => ({
    _id,
    pokemon
  }))
  )}
  
