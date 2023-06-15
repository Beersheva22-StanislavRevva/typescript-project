"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShiftCipher_1 = __importDefault(require("./ShiftCipher"));
var shiftCipher = new ShiftCipher_1.default();
setInterval(function () { return test(); }, 6000);
function test() {
    var cipherType = shiftCipher.cipher("my salary will be 20000 nis in 2023");
    var string = shiftCipher.decipher(cipherType);
    console.log(string);
}
;
//# sourceMappingURL=main.js.map