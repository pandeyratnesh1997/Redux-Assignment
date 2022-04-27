
export class Store {
    constructor(reducer,state){
        this.state  = state;
        this.reducer = reducer;
    }
    getState(){
        return this.state;
    }
    dispatch(action){
        return this.reducer(this.state,action)
    }

}