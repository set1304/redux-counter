export default function(reducer){
    let state = 0;
    const subscribes = [];
    return {
        dispatch(action){
            state = reducer(state, action);
            subscribes.forEach(cb => cb())
        },
        subscribe(cb){
            subscribes.push(cb)
        },
        getState(){
            return state
        }
    }
}