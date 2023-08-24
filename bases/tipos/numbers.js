"use strict";
(function () {
    var avengers = 5;
    console.log({ avengers: avengers });
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A'); //NaN Not a Number se convierte en un valor de tipo number pero no es un numero valido
    console.log({ avengers: avengers });
})();
//# sourceMappingURL=numbers.js.map