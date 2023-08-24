"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        return upper ? (firstName + " " + (lastName || '')).toUpperCase() : firstName + " " + (lastName || '');
        // return `${firstName} ${lastName || ''}`;
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
//# sourceMappingURL=args-default.js.map