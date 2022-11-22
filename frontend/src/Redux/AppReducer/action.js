import * as types from "./actionType"

console.log(process.env.REACT_URL)

export const getManData = (payload) => async (dispatch) => {
    dispatch({ type: types.get_Man_Data_Request })

    try {
        let res = await fetch("https://ecmmerce-server.onrender.com/man")
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
        let res = await fetch(`https://ecmmerce-server.onrender.com/man/${payload}`)
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
        let res = await fetch("https://ecmmerce-server.onrender.com/woman")
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
        let res = await fetch(`https://ecmmerce-server.onrender.com/woman/${payload}`)
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
        let res = await fetch("https://ecmmerce-server.onrender.com/kids")
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
        let res = await fetch(`https://ecmmerce-server.onrender.com/kids/${payload}`)
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
        let res = await fetch("https://ecmmerce-server.onrender.com/kitchen")
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
        let res = await fetch(`https://ecmmerce-server.onrender.com/kitchen/${payload}`)
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
    
    fetch("https://ecmmerce-server.onrender.com/cart" , {
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

    fetch("https://ecmmerce-server.onrender.com/cart" , {
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

    fetch(`https://ecmmerce-server.onrender.com/cart/${id}` , {
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

    fetch(`https://ecmmerce-server.onrender.com/cartquntity/${mock}` , {
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