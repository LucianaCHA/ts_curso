(()=> {
  // constructor privado para evitar instancias nuevas
  // es util para el patrón singleton

  class Apocalipsis {
    static instance: Apocalipsis // static para que sea unica instancia
    private constructor (public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if(!Apocalipsis.instance) { // si no existe la instancia la crea
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el unico')
      }
      return Apocalipsis.instance
    }

    changeName(newName: string): void {
      this.name = newName
    }

  }

  // const apocalipsis = new Apocalipsis('Apocalipsis')
  const apocalipsis = Apocalipsis.callApocalipsis()
  // const apocalipsis2 = new Apocalipsis('Apocalipsis2')
  // const apocalipsis3 = new Apocalipsis('Apocalipsis3')

  // vamos a probar de cambiar el nombre
  apocalipsis.changeName('Apocalipsis 2')

  const realApocalipsis = Apocalipsis.callApocalipsis()
  const otherApocalipsis = Apocalipsis.callApocalipsis()

  console.log(apocalipsis , realApocalipsis, otherApocalipsis)

  console.log(apocalipsis === realApocalipsis);
  



})()