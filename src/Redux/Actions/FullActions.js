export function ToggleChecked (boolean) {
    return dispatch => {
        dispatch(toggle(boolean))
    }
}

export function toggle (boolean) {
    return {
        type: ToggleChecked,
        payload: boolean
    }
}
