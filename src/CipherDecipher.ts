import CipherType from "./model/CipherType";

export default interface CipherDecipher {
    //key:number|string;
    cipher(text:string): CipherType;
    decipher(cipher: CipherType): string;
    updateKey():void;
}