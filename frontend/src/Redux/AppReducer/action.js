import * as types from "./actionType"

let baseURL ="https://eccommerceapi.onrender.com"

export const getManData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_Man_Data_Request })

    try {
        let res = await fetch(`${baseURL}/man`)
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
        let res = await fetch(`${baseURL}/woman`)
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
        let res = await fetch(`${baseURL}/kids`)
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
        let res = await fetch(`${baseURL}/kitchen`)
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
    
    fetch(`${baseURL}/cart` , {
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

    fetch(`${baseURL}/cart` , {
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

    fetch(`${baseURL}/cart/${id}` , {
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

    fetch(`${baseURL}/cartquntity/${mock}` , {
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
    fetch(`${baseURL}/paymentdone` , {
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