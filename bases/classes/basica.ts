(()=> {

  class Avenger{
    // private name:string; // private es para que solo se pueda acceder a la propiedad dentro de la clase
    // public team:string;
    // public realName?:string;

    static averageAge:number = 35; // static es para que sea una propiedad de la clase y no del objeto creado
    static getAverageAge() {
      return this.name;
    }

    constructor( // ts permite crear las propiedades de la clase en el constructor y no tener que declararlas arriba como en js. Esto evita que se tenga que hacer this.name = name , declarando las prop dos veces
      private name:string, // private es para que solo se pueda acceder a la propiedad dentro de la clase
      public team:string,
      public realName?:string
    ){}

    private bio() {
      return `${this.name} (${this.team})`;
    }

  }

  const antman:Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');

  //console.log(antman.bio()); // da error porque bio es privada , aunque js lo va a compilar igual y va a funcionar TS no lo permite y da error ( y eso está bueno porque es un error que se puede evitar)
  console.log(Avenger.getAverageAge());

})()