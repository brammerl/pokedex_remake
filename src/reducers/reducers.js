import { SET_POKEMON_LIST, SET_POKEMON_DETAILS, SET_POKEMON_NAME_QUERY, SET_POKEMON_TYPE_QUERY } from '../actions/reducerActions'
import PokemonResults from '../components/Landing_Page/PokemonResults';

export const initialState = {
  pokemonList: [],
  pokemonDetails: {},
  pokemonTypeQuery: '',
  pokemonNameQuery: '',
}

export default function reducer(state, action) {
  switch(action.type){
    case SET_POKEMON_LIST:
      return {...state, pokemonList: action.payload};
    case SET_POKEMON_DETAILS:
      return {... state, pokemonDetails: action.payload};
     case SET_POKEMON_TYPE_QUERY:
       return {...state, pokemonTypeQuery: action.payload};
      case SET_POKEMON_NAME_QUERY: 
        return {...state, pokemonNameQuery: action.payload};
      default: 
        return {...state};
      
  }
}