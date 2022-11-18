import * as types from "./actionType"

// https://ecommer-production.up.railway.app

export const signup = (payload) => (dispatch) => {
    // console.log("payload", payload)
    dispatch({ type: types.SIGNING_REQUEST })
    fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((res) => {
            dispatch({ type: types.LOGIN_SUCCESS , payload: res})
        })
        .catch((err) => {
            dispatch({ type: types.LOGIN_FAILED })
        })
}


export const signin = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    // console.log("login",payload)

    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((res) => {
            dispatch({ type: types.LOGIN_SUCCESS , payload: res})
        })
        .catch((err) => {
            dispatch({ type: types.LOGIN_FAILED })
        })

}

const isAuth = {
    isAuth: false
}

export const signout = () => (dispatch)=> {
    dispatch({type:types.LOGIN_FAILED , payload: isAuth})
} 

export const mailcheck = (payload) => (dispatch) => {
    dispatch({type: types.EMAILCHECK_REQUEST})

    fetch("http://localhost:8080/newaccount" , {
        method: "POST" ,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((res) => {
        // console.log(res);
        dispatch({type: types.EMAILCHECK_SUCCESS , payload: res})
    })
    .catch((err) => {
        dispatch({type: types.EMAILCHECK_FAILED })
    })

}

export const otpcheck = (payload) => (dispatch) => {
    dispatch({type: types.OTP_REQUEST})

    fetch("http://localhost:8080/checkotp" , {
        method: "POST" ,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((res) => {
        // console.log( "res ", res);
        dispatch({type: types.OTP_SUCCESS , payload: res})
    })
    .catch((err) => {
        dispatch({type: types.OTP_FAILED })
    })
}

export const forgetemail = (payload) => (dispatch)=>{
    dispatch({type: types.FORGETEMAIL_REQUEST})
    

    fetch("http://localhost:8080/passwordrest" , {
        method: "POST" ,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((res)=> {
        // console.log(res);
        dispatch({type: types.FORGETEMAIL_SUCCESS , payload: res})
    })
    .catch((err) => {
        dispatch({type: types.FORGETEMAIL_FAILED })
    })
}

export const forgetotp = (payload) => (dispatch) => {
    dispatch({type: types.FORGETOTP_REQUEST})
    // console.log(payload)

    fetch("http://localhost:8080/changePassword" , {
        method: "POST" ,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((res)=> {
        // console.log(res)
        dispatch({type: types.FORGETOTP_SUCCESS , payload: res})
    })
    .catch((err) => {
        dispatch({type: types.FORGETOTP_FAILED })
    })
}






