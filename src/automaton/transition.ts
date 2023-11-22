import { exit } from "process";
import { States} from "../types/index";
import {isChar, isDigit} from "../utils/index";


// definition fn Transition δ( Q, input ) => ( Q )

export default function Transition(state: States, input: string){

   const currentState = state;

   switch(state){
      case States.q0:
         if(isDigit(input)){
            return States.q3
         }
         else if(isChar(input)){
            return States.q1
         }
         else if(" ") {
            return States.q0
         } 
         else{
            console.error(`unrecognized char: ${input}`)
            exit(1)
         }
      case States.q1:
         if(isChar(input)){
            return States.q1
         }
         else if(input === "" || input === " "){
            return States.q2
         }
         else{
            console.error(`unrecognized char: ${input}`)
            exit(1)
         }
      case States.q2:

      case States.q3:

      case States.q4:
   }
}

// Transition(States.q0, "%")