import { Alphabet } from "../types";

export function isChar(char: Alphabet): boolean{
   return (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z')
}