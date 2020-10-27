const NONBODY_METHODS = ['GET', 'DELETE'];

export const request = (path, method, body) => {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${path}`, {
    method, 
    headers: NONBODY_METHODS.includes(method) ? {} : { 'Content-Type': 'application/json'},
    body: NONBODY_METHODS.includes(method) ? null: JSON.stringify(body)
  })
  .then(res => res.json());
};

export const get = path => request(path, 'GET');