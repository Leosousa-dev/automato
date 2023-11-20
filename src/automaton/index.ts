import {Alphabet, States} from "../types/index"
import Transition from "./transition";


export default function Automaton(state: States, input: Alphabet){
   const nextState = Transition(state, input);

   return nextState;
}