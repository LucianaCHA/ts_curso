"use strict";
(function () {
    //para crear un typo de dato personalizado 
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash);
})();
//# sourceMappingURL=objects.js.map