import * as types from "./actionType"

const initialState = {
    isAuth: false,
    loading: false,
    Response: null
}

export const authreducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.SIGNING_REQUEST:
            return {
                ...state,
                loading: true,
                Response: null

            }
            case types.SIGNING_SUCCESS:
            return {
                ...state,
                loading: false,
                Response: payload

            }
            case types.SIGNING_FAILED:
            return {
                ...state,
                loading: false,
                Response: payload

            }
            case types.LOGIN_REQUEST:
            return {
                ...state,
                isAuth: false,
                loading: true,
                Response: null

            }
            case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loading: false,
                Response: payload

            }
            case types.LOGIN_FAILED:
            return {
                ...state,
                isAuth: false,
                loading: false,
                Response: payload

            }

        default:
            return state
    }
}
