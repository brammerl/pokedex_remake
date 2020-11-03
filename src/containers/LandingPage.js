import React from 'react';
import PokemonResults  from '../components/Landing_Page/PokemonResults';
import SearchBar from '../components/Landing_Page/SearchBar'
;

const LandingPage = () => {
  return (
    <>
      <SearchBar/>
      <PokemonResults/>
    </>
  );
};

export default LandingPage;