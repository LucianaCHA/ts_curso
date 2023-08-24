

import { Pokemon } from "./decorators/pokemon-class";

const pikachu = new Pokemon('Pikachu', 55, 40);

console.log(pikachu);

console.log(pikachu.savePokemonToDB(1));

// pikachu.publicApi = 'https://google.com';
console.log(pikachu.publicApi) 