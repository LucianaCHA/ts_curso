(()=>{

  const fullName = (firstName: string, lastName?: string, upper:boolean = false): string => {

   return upper ? `${firstName} ${lastName || ''}`.toUpperCase() : `${firstName} ${lastName || ''}`;

    // return `${firstName} ${lastName || ''}`;
  }

  const name = fullName('Tony');

  console.log({name});

})();