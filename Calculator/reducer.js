export function reducer(state,action){
    switch(action.type){
        case "INCREMENT" :{
            return{
                ...state, count : state.count++
            }
        }
        case "DECREMENT" :{
            return{
                ...state, count : state.count--
            }
        }
        case "ADD" :{
            console.log(action);

             updated_value = action.payload + count;
            return{
                ...state, count : state.count = updated_value,
            }
        }
    }
}