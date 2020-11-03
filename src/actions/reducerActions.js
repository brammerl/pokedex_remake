export const SET_POKEMON_LIST = `SET_POKEMON_LIST`;
export const setPokemonList = (pokemonList) => ({
  type: SET_POKEMON_LIST,
  payload: pokemonList
});

export const SET_POKEMON_DETAILS = 'SET_POKEMON_DETAILS';
export const setPokemonDetails = (pokemonDetails) => ({
  type: SET_POKEMON_DETAILS,
  payload: pokemonDetails
});

export const SET_POKEMON_NAME_QUERY = 'SET_POKEMON_NAME_QUERY';
export const setPokemonNameQuery = (pokemonName) => ({
  type: SET_POKEMON_NAME_QUERY,
  payload: pokemonName
})

export const SET_POKEMON_TYPE_QUERY = 'SET_POKEMON_TYPE_QUERY';
export const setPokemonTypeQuery = (pokemonType) => ({
  type: SET_POKEMON_TYPE_QUERY,
  payload: pokemonType
})