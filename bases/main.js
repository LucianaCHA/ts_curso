"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return text.length >= 3;
    };
    Validation.validateDate = (date) => {
        return isNaN(date.valueOf());
    };
})(Validation || (Validation = {}));
console.log(Validation.validateText('abc'));
console.log(Validation.validateDate(new Date()));
//# sourceMappingURL=main.js.map