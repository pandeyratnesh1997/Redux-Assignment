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
            // console.log(state);
            // console.log(action);
            let updated_value = action.payload + state.count;
            //  console.log(updated_value);
            return{
                ...state, count : state.count = updated_value,
            }
        }
        case "SUBSTRACT" : {
            let updated_value =  state.count - action.payload;
            return{
                ...state, count : state.count = updated_value,
            }
        }
        case "MULTIPLY" : {
            let updated_value =  state.count * action.payload;
            return{
                ...state, count : state.count = updated_value,
            }
        }
        case "DIVIDE" : {
            if(action.payload==0){
                return  "Error : Input value should not be 0";

                
            }
            let updated_value = Math.floor(state.count/action.payload);
           
            return{
                ...state, count : state.count = updated_value,
            }
        }
        default :{
            return {...state};
        }
    }
}