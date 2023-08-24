(()=>{

  // Tipo explicito de void indica que la función no retorna nada 

  function callBatman():void {
    console.log('Mostrar la batiseñal');
  }

  const a = callBatman();

  console.log(a);

  const callSuperMan = ():void => {
    console.log('Mostrar la superseñal');
  }

  callSuperMan();

})();