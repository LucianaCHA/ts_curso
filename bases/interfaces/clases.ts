(()=> {

  interface Xmen {
    nombre: string,
    realName: string,
    mutantPower (id:string) : string;
  }

  interface Human {
    edad: number,
    
  }

  class Mutante implements Xmen, Human {
    public edad: number;  
    public nombre: string;
    public realName: string;
    public mutantPower (id:string) : string {
      return this.nombre + ' ' + this.realName + ' ' + id;
  }
}

})();