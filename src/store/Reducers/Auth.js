import { LOG_IN, LOG_OUT } from "../Constants/Auth";

const initialState = {
  isAuthenticated: false,
  username: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        ...action.payload, 
        isAuthenticated: true,
      };
      case LOG_OUT:
        return {
          ...initialState,
        };
    default:
      return state;
  }
};

export default AuthReducer;
