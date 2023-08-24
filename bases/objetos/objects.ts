(()=> {

  //para crear un typo de dato personalizado 

  let flash : {name:string, age?:number, powers:string[], getName? : () => string} ={
    name :'Barry Allen', 
    age: 24, 
    powers: ['Super velocidad', 'Viajar en el tiempo']};

    flash = {
      name :'Clark Kent',
      age: 60,
      powers: ['Super velocidad', 'Viajar en el tiempo'],
      getName(){
        return this.name;
      }
    }

console.log(flash);

})();