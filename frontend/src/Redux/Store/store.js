import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authreducer } from "../AuthReducer/reducer";
import { appreducer } from "../AppReducer/reducer";

const CombineReducers = combineReducers({ authreducer, appreducer });

export const store = legacy_createStore(
  CombineReducers,
  applyMiddleware(thunk)
);
