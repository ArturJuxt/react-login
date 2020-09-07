import { combineReducers } from "redux";
import AuthReducer from "./Auth";

const RootReducer = combineReducers({
  Auth: AuthReducer,
});

export default RootReducer;
