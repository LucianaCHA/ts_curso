(()=> {
  type Avenger = {
    nick: string,
    ironman: string,
    vision: string,
    activo: boolean,
    poder: number
  }

  const avengers ={
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  // const {poder, vision} = avengers;

  // console.log(poder.toFixed(2), vision.toUpperCase());

  // const printAvenger = (avengers) => {
  //   const {nick, ironman, vision} = avengers;
  //   console.log(nick, ironman, vision);
  // } esto da error porque avenger es d e tipoany a menos que se le indique el tipo de dato para eso sirve e ltype 

  const printAvenger = ({nick, ironman, vision}: Avenger) => {
    console.log(nick, ironman, vision);
  }

  printAvenger(avengers);

  const avengersArr: string[] = ['Cap', 'Ironman', 'Thor'];

  const [cap,  thor] = avengersArr;


  console.log({cap, thor});
  
  const numero:number = 10;
 
if( numero >0 ){
 
  const numero:number = 10;
 
}
  
})();