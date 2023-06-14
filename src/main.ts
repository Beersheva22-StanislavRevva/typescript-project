import Rectangle from "./Rectangle";
import Shape from "./Shape";

let n = 10;
n = 20;
let num:number | 'abc' = 12;
num = 100;
num = 'abc';
const ar:string[] = [];
ar.push('abc');
const ar1:[string, number?] = ['abc',10];
ar1[0]='lmn';
const map1: Map<string, number> = new Map([["abc", 40]]);
// console.log(map1.get("abc"));
// console.log(map1.entries());
//Array.from(map1.entries()).forEach(e => console.log(`${e[0]} -> ${e[1]}`));

type Comparator<T= number> = (p1:T, p2:T) => number;
let comp: Comparator<string> = 
function (num1: string, num2: string): number {
    return num1 > num2 ? 1: -1;
}
type Person = {id: number, date: Date | string, name:string,
    gender?:"male"|"female"};
function displayPerson(prs: Person): void{
   prs.gender && console.log(prs.gender.substring(0,3))
}
//displayPerson({id:123, date: "2000-10-10", name:"Vasya", gender: "male"});

function cipher(text:string, key: number): string {
    //TODO
    //cipher("yz", 2) => "ab"
    let ar:number[] = [];
   ar = text.split("").map(e => (e.charCodeAt(0) + key) < 127 ? (e.charCodeAt(0)+ key) : (e.charCodeAt(0) + key - 94));
   return ar.map(e => String.fromCharCode(e)).join('');     
}

function decipher(cipher:string, key: number): string {
    let ar:number[] = [];
    ar = cipher.split("").map(e => e.charCodeAt(0) - key > 32 ? (e.charCodeAt(0)- key) : e.charCodeAt(0)- key +94);
    return ar.map(e => String.fromCharCode(e)).join("");
}
// console.log(cipher("abc", 2));
// console.log(decipher("cde", 2));
const shape: Rectangle = new Rectangle (3 ,4);
let width = shape.width;
let height = shape.height;
