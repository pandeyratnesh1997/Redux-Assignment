import {Store} from '/Calculator/Store.js'
import {reducer} from '/Calculator/reducer.js'


let store = new Store(reducer,{count: 0,  add:0})
// console.log(store)
let counter = document.getElementById("counter");
let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");
let add = document.getElementById("add");
let multiply = document.getElementById("multiply");
let substract = document.getElementById("substract");
let divide = document.getElementById("divide");


counter.innerText = store.getState().count;



inc.addEventListener("click",()=>{
    store.dispatch({type:"INCREMENT"});
    counter.innerText = store.getState().count;
});

dec.addEventListener("click",()=>{
    store.dispatch({type:"DECREMENT"});
    counter.innerText = store.getState().count;
});
add.addEventListener("click",()=>{
    let x = document.getElementById("typvalue").value ;
    x = +x;
    store.dispatch({type:"ADD", payload : x});
    counter.innerText = store.getState().count;
});

substract.addEventListener("click",()=>{
    let x = document.getElementById("typvalue").value ;
    x = +x;
    store.dispatch({type:"SUBSTRACT", payload : x});
    counter.innerText = store.getState().count;
})
multiply.addEventListener("click",()=>{
    let x = document.getElementById("typvalue").value ;
    x = +x;
    store.dispatch({type:"MULTIPLY", payload : x});
    counter.innerText = store.getState().count;
})
divide.addEventListener("click",()=>{
    let x = document.getElementById("typvalue").value ;
    x = +x;
    store.dispatch({type:"DIVIDE", payload : x});
    counter.innerText = store.getState().count;
})


