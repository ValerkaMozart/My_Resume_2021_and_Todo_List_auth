import axios from "axios";
import {ADD_TASKS, DEL_LAST_TASK, IS_LOADED} from "./ActionsType";

export function addTask(task) {
    return async (dispatch, getState) => {
        let localId = localStorage.getItem('localId')
        try {
            let responseData = await axios.get(
                `https://resume-app-auth-default-rtdb.europe-west1.firebasedatabase.app/resume-tasks/${localId}.json`
            )
            let state = Object.values(responseData.data)[0]
            let key = Object.keys(responseData.data)[0]
            state.push(task)
            await axios.put(
                `https://resume-app-auth-default-rtdb.europe-west1.firebasedatabase.app/resume-tasks/${localId}/${key}.json`
                , state)
            dispatch(autoLoadTasks())
        } catch (err) {
            console.log(err)
            await axios.post(
                `https://resume-app-auth-default-rtdb.europe-west1.firebasedatabase.app/resume-tasks/${localId}.json`
                , [task])
            dispatch(autoLoadTasks())
        }
    }
}

export function autoLoadTasks() {
    return async dispatch => {
        let localId = localStorage.getItem('localId')
        dispatch(isLoaded(true))
        try {
            let response = await axios.get(
                `https://resume-app-auth-default-rtdb.europe-west1.firebasedatabase.app/resume-tasks/${localId}.json`
            )
            let tasks = Object.values(response.data)
            dispatch(addTasks(tasks[0]))
            dispatch(isLoaded(false))
        } catch (err) {
            console.log(err)
            dispatch(isLoaded(false))
            dispatch(deletedLastTask())
        }
    }
}

export function isLoaded(boolean) {
    return {
        type: IS_LOADED,
        payload: boolean
    }
}

export function taskDelete(id) {
    let localId = localStorage.getItem('localId')
    return async dispatch => {
        try {
            let responseData = await axios.get(
                `https://resume-app-auth-default-rtdb.europe-west1.firebasedatabase.app/resume-tasks/${localId}.json`
            )
            let state = Object.values(responseData.data)[0]
            let key = Object.keys(responseData.data)[0]
            let filteredState = state.filter(task => task.id !== id)
            await axios.put(
                `https://resume-app-auth-default-rtdb.europe-west1.firebasedatabase.app/resume-tasks/${localId}/${key}.json`
                , filteredState)
            dispatch(autoLoadTasks())
        }
        catch (err) {
            console.log(err)
            dispatch(deletedLastTask())
        }

    }
}

export function addTasks(array) {
    return {
        type: ADD_TASKS,
        payload: array
    }
}

export function deletedLastTask () {
    return {
        type: DEL_LAST_TASK
    }
}
