var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    powers_1 = __importDefault(powers_1);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_1.default.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.desc) || 'not found';
        }
    }
    exports.Hero = Hero;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    class Hero4 {
    }
    exports.Hero4 = Hero4;
    exports.PI = 3.1416;
    exports.miNombre = 'Fernando';
});
