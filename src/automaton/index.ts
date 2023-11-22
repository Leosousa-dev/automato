import {Alphabet, States} from "../types/index"
import Transition from "./transition";


export default function Automaton(state: States, input: string): States{
   let nextState: States;
   nextState = Transition(state, input);

   console.log(nextState)
   return nextState;
   
}
