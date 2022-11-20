import * as types from "./actionType"

export const getManData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_Man_Data_Request })

    try {
        let res = await fetch("http://localhost:8080/man")
        res = await res.json();

        // console.log(res)
        dispatch({ type: types.get_Man_Data_Success, payload: res })
        
    }

    catch (err) {
        console.log(err)
        dispatch({ types: types.get_Man_Data_Failure })
    }
}

export const getManSingleData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_Man_Single_Data_Request })
    try {
        let res = await fetch(`http://localhost:8080/man/${payload}`)
        res = await res.json();
        console.log(res)
        dispatch({ type: types.get_Man_Single_Data_Success , payload:res})
    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_Man_Single_Data_Failure })
    }
}


export const getWomanData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_women_Data_Request })
    try {
        let res = await fetch("http://localhost:8080/woman")
        res = await res.json();
        // console.log(res)
        dispatch({ type: types.get_women_Data_Success, payload: res })

    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_women_Data_Failure })
    }
}

export const getWomanSingleData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_women_Single_Data_Request })
    try {
        let res = await fetch(`http://localhost:8080/woman/${payload}`)
        res = await res.json();
        console.log(res)
        dispatch({ type: types.get_women_Single_Data_Success, payload: res })

    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_women_Single_Data_Failure })
    }
}

export const getkidsData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_kids_Data_Request })
    try {
        let res = await fetch("http://localhost:8080/kids")
        res = await res.json();
        // console.log(res)
        dispatch({ type: types.get_kids_Data_Success, payload: res })

    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_kids_Data_Failure })
    }
}

export const getkidsSingleData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_kids_Single_Data_Request })
    try {
        let res = await fetch(`http://localhost:8080/kids/${payload}`)
        res = await res.json();
        console.log(res)
        dispatch({ type: types.get_kids_Single_Data_Success, payload: res })

    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_kids_Single_Data_Failure })
    }
}


export const getkitchenData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_kitchen_Data_Request })
    try {
        let res = await fetch("http://localhost:8080/kitchen")
        res = await res.json();
        // console.log(res)
        dispatch({ type: types.get_kitchen_Data_Success, payload: res })
    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_kitchen_Data_Failure })
    }
}

export const getkitchenSingleData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_kids_Single_Data_Request })
    try {
        let res = await fetch(`http://localhost:8080/kitchen/${payload}`)
        res = await res.json();
        console.log(res)
        dispatch({ type: types.get_kitchen_Single_Data_Success, payload: res })
    }

    catch (err) {
        console.log(err)
        dispatch({ type: types.get_kitchen_Single_Data_Failure })
    }
}

export const addCart = (payload , token) => (dispatch) => {
    // console.log("action" , payload , token)
    fetch("http://localhost:8080/cart" , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "authorization" :`bear ${token}`
        },
        body: JSON.stringify(payload)
    }).then((res)=> res.json())
    .then((res) => {
        dispatch(getData(token))
        console.log(res)
    })
    .catch((err)=> console.log(err))
}

export const getData = (token) => (dispatch) =>{
    // console.log(token)
    dispatch(({type: types.get_Cart_Data_Request}))

    fetch("http://localhost:8080/cart" , {
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
    // console.log(id)

    fetch(`http://localhost:8080/cart/${id}` , {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            "authorization" :`bear ${token}`
        }
    })
    .then((res) => res.json())
    .then((res) => dispatch(getData(token)))
}

// const { token } = JSON.parse(localStorage.getItem("user"))

export const updateQuntity = (id , token , mock) => (dispatch) => {

    // console.log(id )

    fetch(`http://localhost:8080/cartquntity/${mock}` , {
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