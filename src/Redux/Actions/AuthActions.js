import axios from "axios";
import {ADD_TOKEN, AUTH_ERROR_FAIL, EXIT_AUTH} from "./ActionsType";

let API_KEY = 'AIzaSyBDW_YVVcnaUJI8vTnqQcQ4T17I_jRgN_U'
let urlSignUp = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
let urlSignIn = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export function authRequest(email, password, isSingUp) {
    let objData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    return async dispatch => {
        try {
            let response = await axios.post(isSingUp ? urlSignUp : urlSignIn, objData)
            let tokenId = response.data.idToken
            let expiresIn = new Date(new Date().getTime() + response.data.expiresIn * 1000)
            let localId = response.data.localId
            let email = response.data.email
            localStorage.setItem('token', tokenId)
            localStorage.setItem('localId', localId)
            localStorage.setItem('email', email)
            localStorage.setItem('exitTime', expiresIn)
            dispatch(addToken(tokenId))
            dispatch(authError(null))
        } catch (error) {
            console.log(error)
            if (isSingUp) {
                dispatch(authError('signUp'))
            } else {
                dispatch(authError('signIn'))
            }
        }

    }
}
export function authErrorNull () {
    return dispatch => {
        dispatch(authError(null))
    }
}

export function authError (error) {
    return {
        type: AUTH_ERROR_FAIL,
        payload: error
    }
}


export function authExit() {
    return dispatch => {
        localStorage.clear()
        dispatch(exit())
    }
}

export function autoLogin() {
    return dispatch => {
        let timeExit = new Date(localStorage.getItem('exitTime'))
        let timeToExit = (timeExit.getTime() - new Date().getTime())
        let tokenId = localStorage.getItem('token')
        if (timeExit < new Date()) {
            dispatch(exit())
        } else {
            dispatch(addToken(tokenId))
            setTimeout(() => {
                dispatch(exit())
            }, timeToExit)
        }
    }
}

export function exit() {
    return {
        type: EXIT_AUTH,
        payload: null
    }
}

export function addToken(token) {
    return {
        type: ADD_TOKEN,
        payload: token
    }
}