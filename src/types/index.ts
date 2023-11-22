// defining the set of states

export enum States{
   q0 = "q0",
   q1 = "q1",
   q2 = "q2",
   q3 = "q3",
   q4 = "q4",
}


// defining the alphabet

export type L = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
export type D = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type Alphabet = L | D