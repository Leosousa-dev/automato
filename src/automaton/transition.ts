import { exit } from "process";
import { States} from "../types/index";
import {isChar, isDigit} from "../utils/index";


// definition fn Transition δ( Q, input ) => ( Q )

export default function Transition(state: States, input: string){
   let currentState: States = state;

   switch(state){
      case States.q0:
          if(isChar(input)){
            return States.q1
         }
         else if(isDigit(input)){
            return States.q3
         }
         else if(input === "") {
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
         else if(isDigit(input)){
            return States.q3
         }
         else if(input === "") {
            return States.q0
         } 
      case States.q3:
         if(isDigit(input)){
            return States.q3
         }
         else if(isChar(input)){
            return States.q1
         }
         else if(input === ""){
            return States.q0
         }
   }

   return currentState;
}
