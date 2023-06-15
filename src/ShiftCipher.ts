import CipherDecipher from "./CipherDecipher";
import CipherType from "./model/CipherType";
import config from "./config/key-config.json";


export default class ShiftCipher implements CipherDecipher {
  private _key:number;
  private _memory;
  private _time:string;

   constructor() {
   this._memory = new Map();   
   this.setRandomKey();
   this.updateKey();
   }

   cipher(text: string): CipherType {
   let ar:number[] = [];
   const shift = this.getKeyFromMemory(this._time);
   ar = text.split("").map(e => e.charCodeAt(0) + shift < 127 ?
   (e.charCodeAt(0)+ shift) : (e.charCodeAt(0) + shift - 94));
   const cipherText = ar.map(e => String.fromCharCode(e)).join('');
   console.log(cipherText, this._time, shift);
   return {key:this._time, "cipherText":cipherText};
    }
    decipher(cipher: CipherType): string {
        let ar:number[] = [];
        const shift =  this.getKeyFromMemory(cipher.key);
        ar = cipher.cipherText.split("").map(e => e.charCodeAt(0) - shift > 32 ?
        (e.charCodeAt(0)- shift) : e.charCodeAt(0) - shift + 94);
        return ar.map(e => String.fromCharCode(e)).join("").replace(/~/g, " ");
    }
    updateKey(): void {
        setInterval(() => this.setRandomKey(), config.interval);
     }
    getRandomInt(min:number, max:number): number {
        if(min == max) {
            max++;
        } else if (min > max) {
            [min, max] = [max, min]
        }
        return Math.trunc(min + Math.random() * (max - min))
    }
    setRandomKey():void{
        this._key = this.getRandomInt(config.min, config.max);
        this.addKeyToMemory(this._key);
        
    }
    addKeyToMemory(key: number): void {
        let today = new Date();
        this._time = today.toLocaleString().substring(12);
        this._memory.set(this._time, key); 
    }
    getKeyFromMemory(time:string):number {
    return this._memory.get(time);
    } 
}






