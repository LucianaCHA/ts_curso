(()=>{
  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ){
      console.log('constructor avenger called');
    }

    private getFullName = ():string => `${this.name} ${this.realName}`;
  }

  // // Xmen no tiene constructor, pero hereda el constructor de Avenger por eso lo que sigue fuciona bien (auqu llama al constructor de Avenger y muetsra el console.log)
  // class XMen extends Avenger { 

  // }

  // const lobezno = new XMen('Lobezno', 'Logan');

  // console.log(lobezno);
  
  class XMen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ){
      super(name, realName)
      console.log('constructor XMen called');
    }



    // sobreescribir un metodo
    // getFullNameXMen () {
    //   console.log(super.getFullName()); //da error porque es privado
      
    // }

    // getters y setters

    get fullName(): string {
      return `${this.name} ${this.realName}`;// por defecto es publico y el getter debe retrnar alo
    }

    set fullName( name: string ) { // por defecto es publico y el setter debe recibir un parametro y no debe retornar nada
      if ( name.length < 3 ) {
        throw new Error('El nombre debe ser mayor a 3 caracteres');
      }
      this.name = name;
    }
  }

  const lobezno = new XMen('Wolverine', 'Logan',true);

  console.log(lobezno.fullName);

  lobezno.fullName = '123456'; // llama al setter

  console.log(lobezno.fullName);
})()