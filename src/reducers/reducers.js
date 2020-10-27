export const initialSate = {
  pokemonList: {},
  pokemonDetails: {}
}

export default function reducer(state, action) {
  switch(action.type){
    case SET_POKEMON_LIST:
      return {...state, pokemonList: action.payload};
    case SET_POKEMON_DETAILS:
      return {... state, pokemonDetails: action.payload}
  }
}