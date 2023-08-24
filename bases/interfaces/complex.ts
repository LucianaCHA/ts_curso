(()=> {
  
  interface Direccion {
    pais: string,
    calle: string,
    casaNo: number
  }
  interface Cliente {
    nombre: string,
    edad?: number,
    direccion: Direccion
    getAdress (id:string) : string
  }    

  const cliente:Cliente = {
    nombre: 'Fernando',
    edad: 25,
    direccion: {
      pais: 'Canada',
      casaNo: 615,
      calle: 'Gran Via'
    },
    getAdress(){
      return this.direccion?.pais
    }

  }

  console.log(cliente);

  const cliente2:Cliente = {
    nombre: 'Melissa',
    edad: 25,
    direccion: {
      pais: 'Canada',
      casaNo: 615,
      calle: 'Gran Via'
    },

    getAdress(id:string){
      return this.direccion?.pais
    }
  }

  console.log(cliente2);


})();