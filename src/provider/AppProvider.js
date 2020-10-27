import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/reducers';
import { fetchPokemonFromApi } from '../services/apiRoutes';
import { setPokemonList } from '../actions/reducerActions';


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPokemonFromApi(1)
      .then(pokemon => dispatch(setPokemonList(pokemon)))
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;