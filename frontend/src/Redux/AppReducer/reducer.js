import * as types from "./actionType";

const initialState = {
  loading: false,
  Men: [],
  menpages : 1,
  Women: [],
  womenpages : 1,
  kids: [],
  kidspages : 1,
  kitchen: [],
  kitchenpages : 1,
  cart: [],
};

export const appreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // men
    case types.get_Man_Data_Request:
      return {
        ...state,
        loading: true,
      };

    case types.get_Man_Data_Success:
      return {
        ...state,
        loading: false,
        Men: payload.data,
        menpages: payload.pages,
      };

    case types.get_Man_Data_Failure:
      return {
        ...state,
        loading: false,
      };

    // woman

    case types.get_women_Data_Request:
      return {
        ...state,
        loading: true,
      };
    case types.get_women_Data_Success:
      return {
        ...state,
        loading: false,
        Women: payload.data,
        womenpages: payload.pages
      };
    case types.get_women_Data_Failure:
      return {
        ...state,
        loading: false,
      };

    //kids

    case types.get_kids_Data_Request:
      return {
        ...state,
        loading: true,
      };
    case types.get_kids_Data_Success:
      return {
        ...state,
        loading: false,
        kids: payload.data,
        kidspages : payload.pages
      };
    case types.get_kids_Data_Failure:
      return {
        ...state,
        loading: false,
      };

    //kitchen

    case types.get_kitchen_Data_Request:
      return {
        ...state,
        loading: true,
      };
    case types.get_kitchen_Data_Success:
      return {
        ...state,
        loading: false,
        kitchen: payload.data,
        kitchenpages: payload.pages
      };
    case types.get_kitchen_Data_Failure:
      return {
        ...state,
        loading: false,
      };

    //cart
    case types.get_Cart_Data_Request:
      return {
        ...state,
        loading: true,
      };
    case types.get_Cart_Data_Success:
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    case types.get_Cart_Data_Failure:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
