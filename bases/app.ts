// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface IAuto {
  encender : boolean
  velocidadMaxima:number
  acelerar ():void

}
const conducirBatimovil = ( auto : IAuto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil :IAuto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface IGuason {
  reir?: boolean,
  comer?:boolean,
  llorar?:boolean

}
const guason: IGuason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason : IGuason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface IFuncion {
  (listado : string[]): number
}

const ciudadGotica :IFuncion = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface IPersona {

  nombre : string
    edad:string
    sexo: 'M'| 'F'
    estadoCivil : string
    imprimirBio(): void 
    

}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements IPersona{
  public edad: string;
  public estadoCivil: string;
  public nombre: string;
  public sexo: "M" | "F";
  public imprimirBio(): void {
    
  }
}