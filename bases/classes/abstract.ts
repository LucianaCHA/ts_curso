(()=>{

  abstract class Mutante {
    constructor(
      public nombre: string,
      public edad: number,
      public poder: string
    ){}
  }

  class Xmen extends Mutante {
    // si no se define un constructor, se hereda el constructor del padre
    //puedo agregar metodos y propiedades

    saveWorld(){
      return 'Mundo a salvo!';
    }  
  }

  class Villano extends Mutante {
  

    conquerWorld(){
      return 'Mundo conquistado!';
    }
  }

  const wolverine = new Xmen('Logan', 45, 'Regeneración');
  const apocalypse = new Villano('En Sabah Nur', 5000, 'Absorber poderes');

  console.log(wolverine.saveWorld());
  console.log(apocalypse.conquerWorld());

  const printNAme = ( character: Mutante ) => {
    console.log(character.nombre);
  }

  printNAme(wolverine);

})();