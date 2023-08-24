(()=> {

  class Avenger{
    name ;
    power;

    constructor(name, power){
      this.name = name;
      this.power = power;
    }

  }

  const antman = new Avenger('Antman', 2500);

  console.log(antman);

  class AvengerFlying extends Avenger{
    flying;

    constructor(name, power){
      super(name, power);
      this.flying = true;
    }

  }

  const falcon = new AvengerFlying('Falcon', 1500);

  console.log(falcon);
  


  
})();