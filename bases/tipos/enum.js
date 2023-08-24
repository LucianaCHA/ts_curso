"use strict";
(function () {
    // enum solo existe en TS, sirve para crear un conjunto de constantes con nombre que tenga un sentido semántico
    var Volumen;
    (function (Volumen) {
        Volumen[Volumen["min"] = 1] = "min";
        Volumen[Volumen["medio"] = 2] = "medio";
        Volumen[Volumen["max"] = 10] = "max";
    })(Volumen || (Volumen = {}));
    var audio = Volumen.medio;
    console.log(audio);
})();
//# sourceMappingURL=enum.js.map