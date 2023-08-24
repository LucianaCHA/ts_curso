(()=> {

  const addNumbers = (a: number, b: number): number => a + b;

  const greet = (name: string): string => `Hello ${name}`;

  const saveTheWorld = (): void => console.log('The world is saved!');

  // let myFunction; // ts infiere el tipo de dato uando se asigna un valor a la variable, pero deberia ser explicito para evitar errores

  let myFunction : (x:number, y:number) => number; // se asigna el tipo de dato a la funcion
  // myFunction = 10; // si my function es any, no hay problema sto ada
  myFunction = addNumbers; //

  console.log(myFunction(1,2));

  // myFunction = greet;
  // console.log(myFunction('Tony'));

  // myFunction = saveTheWorld;
  // console.log(myFunction());

  // ts asigna el tipo de dato de la funcion a la variable de forma automatica

  // myFunction = 10; // error


})(); 