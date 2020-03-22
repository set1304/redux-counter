export default function (state, action) {
    if(action.type === "ADD"){
        return state + 1;
    } else if(action.type === "SUB"){
        return state - 1;
    }
    return state;
}