(()=>{

    // Tuplas
    // Son arreglos con estructura fija, es decir, se debe respetar el tipo de dato y la cantidad de elementos así como su orden

    const heroe: [string, number, boolean] = ['Dr. Strange', 100, true];

    heroe[0] = 'Ironman';
    heroe[1] = 50;
    heroe[2] = false;

    console.log(heroe);

})();