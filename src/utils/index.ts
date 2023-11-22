
export function isChar(char: string): boolean{
   return (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z')
}

export function isDigit(char: string): boolean{
   return char >= '0' && char <= '9';
}
