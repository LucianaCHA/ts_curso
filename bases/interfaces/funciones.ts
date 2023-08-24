(()=> {

  interface addNumbers {
    (a:number, b:number):number
  }

  let addNumbers: addNumbers;

  addNumbers = (a:number, b:number) => {
    return a + b;
  }

})();