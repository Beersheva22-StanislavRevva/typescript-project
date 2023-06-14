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
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(function (e) { return console.log("".concat(e[0], " -> ").concat(e[1])); });
var a = "10";
function f(a) {
    return typeof a == "number" ? a * 2 : +(a + 2);
}
console.log(f(a));
//# sourceMappingURL=main.js.map