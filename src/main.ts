import ShiftCipher from "./ShiftCipher";
import CipherType from "./model/CipherType";

let shiftCipher = new ShiftCipher();
setInterval(() => test(),6000);
function test () {
let cipherType = shiftCipher.cipher("my salary will be 20000 nis in 2023");
let string = shiftCipher.decipher(cipherType);
console.log(string);
};



//setInterval(function () {shiftCipher.cipher("abc")}, 6000);
