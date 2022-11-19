import * as types from "./actionType"

const initialState = {
    loading: false,
    Men: [],
    Women: [],
    kids: [],
    kitchen: [],
    cart: []
}

export const appreducer = (state = initialState, { type, payload }) => {
    switch (type) {


        // men
        case types.get_Man_Data_Request:
            return {
                ...state,
                loading: true
            }

        case types.get_Man_Data_Success:
            return {
                ...state,
                loading: false,
                Men: payload
            }

        case types.get_Man_Data_Failure:
            return {
                ...state,
                loading: false,
            }




        // woman

        case types.get_women_Data_Request:
            return {
                ...state,
                loading: true,
            }
        case types.get_women_Data_Success:
            return {
                ...state,
                loading: false,
                Women: payload
            }
        case types.get_women_Data_Failure:
            return {
                ...state,
                loading: false
            }



        //kids

        case types.get_kids_Data_Request:
            return {
                ...state,
                loading: true
            }
        case types.get_kids_Data_Success:
            return {
                ...state,
                loading: false,
                kids: payload
            }
        case types.get_kids_Data_Failure:
            return {
                ...state,
                loading: false
            }





        //kitchen

        case types.get_kitchen_Data_Request:
            return {
                ...state,
                loading: true
            }
        case types.get_kitchen_Data_Success:
            return {
                ...state,
                loading: false,
                kitchen: payload
            }
        case types.get_kitchen_Data_Failure:
            return {
                ...state,
                loading: false
            }



        //cart
        case types.get_Cart_Data_Request:
            return {
                ...state,
                loading: true
            }
        case types.get_Cart_Data_Success:
            return {
                ...state,
                loading: false,
                cart: payload
            }
        case types.get_Cart_Data_Failure:
            return {
                ...state,
                loading: false
            }



        default:
            return state
    }
}
