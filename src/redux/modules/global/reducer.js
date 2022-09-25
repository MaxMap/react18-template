import produce from "immer";
import * as types from './mutation-types.js'

const globalState = {
    token:'',
    theme:"default"
}

const global = (state= globalState,action)=>{
    return  produce(state,draftState =>{
        switch (action.type) {
            case types.SET_TOKEN:
                draftState.token = action.token;
                break;
            default:
                return draftState;
        }
    })
}
export default global
