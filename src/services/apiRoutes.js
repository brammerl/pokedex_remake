import { get } from './requests';

export const fetchPokemon = (page) => {
  return get(`sort=pokemon&page=${page}`)
    .then(data => data.body.results);
}
