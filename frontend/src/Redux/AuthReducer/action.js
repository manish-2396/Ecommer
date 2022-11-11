import * as types from "./actionType"

export const signup = (payload) => (dispatch) => {
    console.log("payload", payload)
    dispatch({ type: types.SIGNING_REQUEST })
    fetch("https://ecommer-production.up.railway.app/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch({ type: types.LOGIN_SUCCESS })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.LOGIN_FAILED })
        })
}


export const signin = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    console.log("login",payload)

    fetch("https://ecommer-production.up.railway.app/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch({ type: types.LOGIN_SUCCESS })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: types.LOGIN_FAILED })
        })

}



