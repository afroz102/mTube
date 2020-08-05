import { SET_USER, TOGGLE_AUTH_STATE, LOGOUT_USER } from '../actionType';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const logOutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const toggleIsAuthenticAating = () => {
    return {
        type: TOGGLE_AUTH_STATE
    }
}