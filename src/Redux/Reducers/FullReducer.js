import {ToggleChecked} from "../Actions/FullActions";
import {ADD_TASKS, ADD_TOKEN, AUTH_ERROR_FAIL, DEL_LAST_TASK, EXIT_AUTH} from "../Actions/ActionsType";

let inicialState = {
    isChecked: false,
    tasks: [],
    isLoading: false,
    tokenAuth: null,
    authError: null,
    isLoaded: false
}

export function FullReducer (state = inicialState, actions) {
    switch (actions.type) {
        case ADD_TOKEN :
            return {...state, tokenAuth: actions.payload}
        case ADD_TASKS :
            return {...state, tasks: actions.payload}
        case DEL_LAST_TASK :
            return {...state, tasks: []}
        case AUTH_ERROR_FAIL :
            return  {...state, authError: actions.payload}
        case EXIT_AUTH :
            return {...state, tokenAuth: actions.payload, tasks: []}
        case ToggleChecked :
            return {...state, isChecked: actions.payload}
        default :
            return state
    }
}