import * as types from "./actionType"

// console.log(process.env.REACT_APP_process.env.REACT_APP_URL)
// var process.env.REACT_APP_URL = process.env.REACT_APP_process.env.REACT_APP_URL

export const getManData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_Man_Data_Request })

    try {
        let res = await fetch(`${process.env.REACT_APP_URL}/man`)
        res = await res.json();

        // console.log(res)
        dispatch({ type: types.get_Man_Data_Success, payload: res })
        
    }

    catch (err) {
        console.log(err)
        dispatch({ types: types.get_Man_Data_Failure })
    }
}




export const getWomanData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_women_Data_Request })
    try {
        let res = await fetch(`${process.env.REACT_APP_URL}/woman`)
        res = await res.json();
        // console.log(res)
        dispatch({ type: types.get_women_Data_Success, payload: res })

    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_women_Data_Failure })
    }
}



export const getkidsData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_kids_Data_Request })
    try {
        let res = await fetch(`${process.env.REACT_APP_URL}/kids`)
        res = await res.json();
        // console.log(res)
        dispatch({ type: types.get_kids_Data_Success, payload: res })

    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_kids_Data_Failure })
    }
}




export const getkitchenData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_kitchen_Data_Request })
    try {
        let res = await fetch(`${process.env.REACT_APP_URL}/kitchen`)
        res = await res.json();
        // console.log(res)
        dispatch({ type: types.get_kitchen_Data_Success, payload: res })
    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_kitchen_Data_Failure })
    }
}



export const addCart = (payload , token) => (dispatch) => {
    
    fetch(`${process.env.REACT_APP_URL}/cart` , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "authorization" :`bear ${token}`
        },
        body: JSON.stringify(payload)
    })
    .then((res)=> res.json())
    .then((res) => {
        dispatch(getData(token))
        // console.log(res)
    })
    .catch((err)=> console.log(err))
}

export const getData = (token) => (dispatch) =>{

    dispatch(({type: types.get_Cart_Data_Request}))

    fetch(`${process.env.REACT_APP_URL}/cart` , {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "authorization" :`bear ${token}`
        }
    })
    .then((res) => res.json())
    .then((res)=> {
        // console.log(res)
        dispatch({type: types.get_Cart_Data_Success , payload:res})
    })
    .catch((err) => dispatch({type:types.get_Cart_Data_Failure}))
}

export const removeData = (id , token) => (dispatch) => {

    fetch(`${process.env.REACT_APP_URL}/cart/${id}` , {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            "authorization" :`bear ${token}`
        }
    })
    .then((res) => res.json())
    .then((res) => dispatch(getData(token)))
}



export const updateQuntity = (id , token , mock) => (dispatch) => {

    fetch(`${process.env.REACT_APP_URL}/cartquntity/${mock}` , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "authorization" :`bear ${token}`
        },
        body: JSON.stringify({_id:id})
    })
    .then((res) => res.json())
    .then((res) => {
        dispatch(getData(token))
        console.log(res)
    })

}

export const payment = (token) => (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/paymentdone` , {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            "authorization" :`bear ${token}`
        }
    })
    .then((res) => res.json())
    .then((res) => {
        dispatch(getData(token))
        console.log(res)
    })
}