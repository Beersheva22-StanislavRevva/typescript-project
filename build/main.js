"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = __importDefault(require("./Rectangle"));
var n = 10;
n = 20;
var num = 12;
num = 100;
num = 'abc';
var ar = [];
ar.push('abc');
var ar1 = ['abc', 10];
ar1[0] = 'lmn';
var map1 = new Map([["abc", 40]]);
var comp = function (num1, num2) {
    return num1 > num2 ? 1 : -1;
};
function displayPerson(prs) {
    prs.gender && console.log(prs.gender.substring(0, 3));
}
function cipher(text, key) {
    var ar = [];
    ar = text.split("").map(function (e) { return (e.charCodeAt(0) + key) < 127 ? (e.charCodeAt(0) + key) : (e.charCodeAt(0) + key - 94); });
    return ar.map(function (e) { return String.fromCharCode(e); }).join('');
}
function decipher(cipher, key) {
    var ar = [];
    ar = cipher.split("").map(function (e) { return e.charCodeAt(0) - key > 32 ? (e.charCodeAt(0) - key) : e.charCodeAt(0) - key + 94; });
    return ar.map(function (e) { return String.fromCharCode(e); }).join("");
}
var shape = new Rectangle_1.default(3, 4);
var width = shape.width;
var height = shape.height;
//# sourceMappingURL=main.js.map