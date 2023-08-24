(()=>{
  type Hero = {
    name:string,
    age?:number,
    powers:string[],
    getName? : () => string
  }


  let myCustomVariable : (string | number | Hero) = 'Jose';

  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name :'Clark Kent',
    age: 60,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
    // getName(){
    //   return this.name;
    // }
  }

  console.log(myCustomVariable);

})();