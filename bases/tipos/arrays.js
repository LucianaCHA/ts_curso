"use strict";
(function () {
    // const numbers:(string|number|boolean)[] = [1,2,3,4,5, '6'];
    var numbers = [1, 2, 3, 4, 5];
    numbers.push(7);
    // numbers.push(true); // error aunque lo permite js no lo permite ts
    console.log(numbers);
    var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.push('Mandarin');
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
//# sourceMappingURL=arrays.js.map