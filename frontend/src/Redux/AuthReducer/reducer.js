import * as types from "./actionType"

const initialState = {
    islogin: false,
    isAuth: false,
    loading: false,
    isError: false,
    ResponseMail: {},
    ResponseOtp: {},
    ResponseSignup: {},
    ResponseSignin: {},
    ResponseForgetMail: {},
    ResponseForgetOtp: {},




}

export const authreducer = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {
        // Email Check
        case types.EMAILCHECK_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.EMAILCHECK_SUCCESS:
            return {
                ...state,
                loading: false,
                ResponseMail: payload

            }
        case types.EMAILCHECK_FAILED:
            return {
                ...state,
                loading: false,
                isError: true,
                ResponseMail: payload
            }
        //otp
        case types.OTP_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                ResponseOtp: payload

            }
        case types.OTP_FAILED:
            return {
                ...state,
                loading: false,
                isError: true,
                ResponseOtp: payload
            }
        // signup
        case types.SIGNING_REQUEST:
            return {
                ...state,
                loading: true,
                Response: null

            }
        case types.SIGNING_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loading: false,
                ResponseSignup: payload

            }
        case types.SIGNING_FAILED:
            return {
                ...state,
                loading: false,
                ResponseSignup: payload

            }

        // login
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                islogin: true,
                loading: false,
                ResponseSignin: payload

            }
        case types.LOGIN_FAILED:
            return {
                ...state,
                isAuth: false,
                loading: false,
                ResponseSignin: payload

            }

        //forgetemail

        case types.FORGETEMAIL_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case types.FORGETEMAIL_SUCCESS:
            return {
                ...state,
                islogin: true,
                loading: false,
                ResponseForgetMail: payload

            }
        case types.FORGETEMAIL_FAILED:
            return {
                ...state,
                isAuth: false,
                loading: false,
                ResponseForgetMail: payload

            }

        //forgetotp

        case types.FORGETOTP_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case types.FORGETOTP_SUCCESS:
            return {
                ...state,
                islogin: true,
                loading: false,
                ResponseForgetOtp: payload

            }
        case types.FORGETOTP_FAILED:
            return {
                ...state,
                isAuth: false,
                loading: false,
                ResponseForgetOtp: payload
            }
        default:
            return state
    }
}


