(()=> {
  type Avenger = {
    name: string,
    weapon: string,
  }

  const ironman  : Avenger =  {
    name: 'Ironman',
    weapon: 'Armorsuit'
  }

  const thor  : Avenger =  {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const cap  : Avenger =  {
    name: 'Cap',
    weapon: 'Shield'
  }

  const avengers: Avenger[] = [ironman, thor, cap];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();