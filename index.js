import { reducer } from '/reducer.js';
import {Store} from '/Store.js'
let value = 0;
const store = new Store(reducer,{
    count:10,
})
let counter = document.getElementById("counter");
let Inc = document.getElementById("incrmentCounter");
let Dcr = document.getElementById("decrmentCounter")
counter.innerText = store.getState().count;
Inc.addEventListener("click",()=>{
    store.dispatch({type: "INCREMENT"}) 
    counter.innerText = store.getState().count; 
} );

Dcr.addEventListener("click",()=>{
    store.dispatch({type: "DECREMENT"})
    counter.innerText = store.getState().count; 
})