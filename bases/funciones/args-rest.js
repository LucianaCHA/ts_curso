"use strict";
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(' ');
    };
    var name = fullName('Anthony', 'Edward', 'Stark');
    console.log({ name: name });
})();
//# sourceMappingURL=args-rest.js.map