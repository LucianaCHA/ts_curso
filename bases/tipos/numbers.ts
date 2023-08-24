(()=> {

  let avengers:number = 5;

  console.log({avengers});

  const villians = 20;

  if(avengers < villians){
    console.log('Estamos en problemas');
  }else{
    console.log('Nos salvamos');
  }

  avengers = Number('55A');//NaN Not a Number se convierte en un valor de tipo number pero no es un numero valido

  console.log({avengers});

})();