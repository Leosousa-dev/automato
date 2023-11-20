# Automaton (AFD)


### Overview

This  project consists of an This project implements a Deterministic Finite Automaton (**DFA** or **AFD**) to recognize a simple language. The automaton has four states, including two final states, and is designed to demonstrate the mathematical concepts behind DFAs and their practical implementation.


## Mathematical Concepts

Deterministic Finite Automaton ( **AFD** )

🤔 what do we need to build an automaton

An automaton is a mathematical model used to represent a system that follows a set of rules or transitions from one state to another based on inputs.

```
 M = (Q, Σ, δ, q₀, F)
```

( **Q** ) represents the set of states of the automaton.
( **Σ** ) represents the alphabet of the language.
( **δ** ) represents the state transition function.
( **q₀** ) represents the initial state.
( **F** ) represents the set of final states of the automaton

---
**Now let's build the representation of our automaton**
Our language is very simple, it consists of letters from a-z and numbers from 0-9

( **Q** ) { q0, q1, q2, q3, q4 }

( **Σ** ) { a-z, 0-9 }

( **δ** ) **δ**( **Q**, **input** ) => ( **Q** ) 

( **q₀** ) **Q0**

( **F** ) { **q2**, **q4** }
