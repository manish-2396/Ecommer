import * as types from "./actionType"

const initialState = {
    loading: false,
    Men: [],
    Women: [],
    kids: [],
    kitchen: []
}

export const appreducer = (state = initialState, { type, payload }) => {
    switch (type) {


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

        default:
            return state
    }
}
