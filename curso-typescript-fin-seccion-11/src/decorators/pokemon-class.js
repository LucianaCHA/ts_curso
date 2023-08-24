// los decoradores son funciones que se ejecutan cuando se define una clase y no cuando se instancia
// los decoradores se ejecutan de arriba hacia abajo
// son funciones que amplian la funcionalidad de una clase sin modificarla
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function printToConsole(constructor) {
        console.log(constructor);
    }
    const printToConsoleConditional = (print = false) => {
        if (print) {
            return printToConsole;
        }
        return () => { };
    };
    const blockPrototype = function (constructor) {
        Object.seal(constructor); // Objecr es una clase global de JS y seal es un metodo que sella el constructor para que no se pueda modificar
        Object.seal(constructor.prototype); // sella el prototipo para que no se pueda modificar
    };
    //factory de decoradores
    function checkValidId() {
        // target es el prototipo de la clase
        // propertyKey es el nombre del metodo
        // descriptor es el descriptor del metodo
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value; // guardamos el metodo original en una variable
            descriptor.value = function (id) {
                if (id < 1 || id > 151) {
                    return console.error('Invalid ID');
                }
                return originalMethod(id); // ejecutamos el metodo original con el id que le pasamos
            };
        };
    }
    function readOnly(isWritable = true) {
        return function (target, propertyKey) {
            const descriptor = {
                get() {
                    console.log(this);
                    return 'Hello World';
                },
                set(value) {
                    // console.warn('Read only property');
                    // console.log(this, value);
                    Object.defineProperty(this, propertyKey, {
                        value: value,
                        writable: !isWritable,
                        enumerable: false,
                    });
                }
            };
            return descriptor;
        };
    }
    let Pokemon = class Pokemon {
        constructor(name, attack, defense) {
            this.name = name;
            this.attack = attack;
            this.defense = defense;
            this.publicApi = 'https://pokeapi.co';
        }
        savePokemonToDB(id) {
            console.log(`Pokemon ${id} saved to DB`);
        }
    };
    __decorate([
        readOnly()
    ], Pokemon.prototype, "publicApi", void 0);
    __decorate([
        checkValidId()
    ], Pokemon.prototype, "savePokemonToDB", null);
    Pokemon = __decorate([
        blockPrototype,
        printToConsoleConditional()
    ], Pokemon);
    exports.Pokemon = Pokemon;
});
