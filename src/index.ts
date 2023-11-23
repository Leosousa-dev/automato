import Automaton from "./automaton/index";

import { States } from "./types";

function loop(src: string) {
   let currentState: States = States.q0;
   let i: number = 0;

   for (i; i < src.length; i++) {
      let char = src[i];

      if(char !== " " && char !== "\n"){
         currentState = Automaton(currentState, char);
      }
   }
}

loop("tes 123");
