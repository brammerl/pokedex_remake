import React, { useState } from 'react';


const SearchBar = () => {
const [pokemonNameQuery, setPokemonNameQuery] = useState('');
const [pokemonTypeQuery, setPokemonTypeQuery] = useState('');



return (
  
      <div>
        <form>
          <input type='text' name='pokemonNameQuery' value=''/>
          <label> 
            <input type='radio'name='type' value='grass'/>
            Grass
          </label>
         

          
         
          <input type='submit'/>
        </form>
      </div> 
  );
};

export default SearchBar;
