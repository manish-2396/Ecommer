import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authreducer } from "../AuthReducer/reducer";



const CombineReducers = combineReducers({authreducer})


export const store = legacy_createStore(CombineReducers , applyMiddleware(thunk)) 