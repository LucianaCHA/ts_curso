define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.printObject = (argument) => {
        console.log(argument);
    };
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
    exports.genericFunctionArrow = (argument) => argument;
});
