define(["require", "exports", "./decorators/pokemon-class"], function (require, exports, pokemon_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pikachu = new pokemon_class_1.Pokemon('Pikachu', 55, 40);
    console.log(pikachu);
    console.log(pikachu.savePokemonToDB(1));
    // pikachu.publicApi = 'https://google.com';
    console.log(pikachu.publicApi);
});
