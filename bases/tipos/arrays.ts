(()=> {

  // const numbers:(string|number|boolean)[] = [1,2,3,4,5, '6'];

  const numbers:(number)[] = [1,2,3,4,5];

  numbers.push(7);

  // numbers.push(true); // error aunque lo permite js no lo permite ts
  console.log(numbers);

  const villians :string[]= ['Omega Rojo', 'Dormammu', 'Duende Verde'];

  villians.push('Mandarin');

  villians.forEach(v => console.log(v.toUpperCase()));

})();