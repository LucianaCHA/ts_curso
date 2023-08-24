
// los decoradores son funciones que se ejecutan cuando se define una clase y no cuando se instancia
// los decoradores se ejecutan de arriba hacia abajo
// son funciones que amplian la funcionalidad de una clase sin modificarla

function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional =(print: boolean = false) : Function => {
  if (print) {
    return printToConsole;
  }
  return () => {};
}

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor); // Objecr es una clase global de JS y seal es un metodo que sella el constructor para que no se pueda modificar
  Object.seal(constructor.prototype); // sella el prototipo para que no se pueda modificar
}

//factory de decoradores

function checkValidId() {
  // target es el prototipo de la clase
  // propertyKey es el nombre del metodo
  // descriptor es el descriptor del metodo
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value; // guardamos el metodo original en una variable

    descriptor.value = function (id: number) { // sobreescribimos el metodo original
      if (id < 1 || id > 151) {
        return console.error('Invalid ID');
      }
      return originalMethod(id); // ejecutamos el metodo original con el id que le pasamos
    }

    
  }
}

function readOnly(isWritable: boolean = true):Function {
  return function (target: any, propertyKey: string){ // al ser un decorador de propiedades, el descriptor es el descriptor de la propiedad y no del metodo
    const descriptor :PropertyDescriptor = {
      get() {
        console.log(this);
        return 'Hello World';
      },
      set(this, value: string) {
        // console.warn('Read only property');
        // console.log(this, value);
        Object.defineProperty(this, propertyKey, {
          value : value,
          writable: !isWritable,
          enumerable: false,
      })

    }
  }

    return descriptor;

  }
  
}

@blockPrototype
@printToConsoleConditional()
export class Pokemon {
  @readOnly()
  public publicApi: string = 'https://pokeapi.co';
    constructor(
        public name: string,
        public attack: number,
        public defense: number
    ) { }

    @checkValidId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon ${id} saved to DB`);
    }
}