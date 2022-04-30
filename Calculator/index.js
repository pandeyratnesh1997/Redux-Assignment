import {Store} from '/Calculator/Store.js'
import {reducer} from '/Calculator/reducer.js'
let x = document.getElementById("value").value;
x = Number(x);
console.log(x);
let store = new Store(reducer,{count: 0,  add:0})
console.log(store)
let counter = document.getElementById("counter");
let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");
let add = document.getElementById("add");
let multiply = document.getElementById("multiply");
let substract = document.getElementById("substract");
let divide = document.getElementById("divide");

counter.innerText = store.getState().count;


add.addEventListener("click",()=>{
    store.dispatch({type:"ADD"});
    counter.innerText = store.getState(x).add;
})
inc.addEventListener("click",()=>{
    store.dispatch({type:"INCREMENT"});
    counter.innerText = store.getState().count;
});

dec.addEventListener("click",()=>{
    store.dispatch({type:"DECREMENT",payload:{x}});
    counter.innerText = store.getState().count;
});


