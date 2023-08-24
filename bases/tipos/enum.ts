(()=>{

  // enum solo existe en TS, sirve para crear un conjunto de constantes con nombre que tenga un sentido semántico

  enum Volumen {
    min = 1,
    medio,
    max = 10
  }

  let audio: Volumen = Volumen.medio;

  console.log(audio);

})();