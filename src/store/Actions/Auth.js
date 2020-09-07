import { LOG_IN, LOG_OUT } from '../Constants/Auth';

export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logOut = () => ({ type: LOG_OUT });