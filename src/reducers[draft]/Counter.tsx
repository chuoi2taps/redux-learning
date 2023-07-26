import { produce } from "immer";

const initState = {count : 0} as {count:number}
export const counterReducer = (state = initState, action:any) => {
    return produce(state, draft => {
        switch(action.type){
            case "INCREMENT":
                draft.count ++;
            break;
            case "DECREMENT":
                draft.count --;
            break;
            case "INCREASE":
                draft.count += action.payload;
            break;
            case "DECREASE":
                draft.count -= action.payload;
            break;
            default:
                return state;
        }
    })
}