"use strict";
(function () {
    var avengers = 123;
    var exist;
    var power;
    avengers = 'Dr. Strange';
    console.log(avengers.charAt(0));
    avengers = 150.5555;
    console.log(avengers.toFixed(2));
    console.log(avengers);
    // alno tener un tipo definido se puede asignar cualquier valor a la variable, eso0 es lo que se conoce como tipo any.
    // el inco0nveniente es que no se puede acceder a los metodos de los tipos de datos que se asignan a la variable en tiempo de ejecucion
    // casting dos formas
    // indicando al interprete que es de tipo string con la palabra reservada as
    avengers = 'Ironman';
    console.log(avengers.charAt(0));
    // indicado al interprete que es de tipo number con <>
    avengers = 150.5555;
    console.log(avengers.toFixed(2));
})();
//# sourceMappingURL=any.js.map