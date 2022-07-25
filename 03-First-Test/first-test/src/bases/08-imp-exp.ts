import heroes from '../bases/data/heroes';
export const getHeroeById = (id = 0) => heroes.find((heroe) => heroe.id === id);
export const getHeroesByOwner = (owner = "") => heroes.filter((heroe) => heroe.owner === owner);