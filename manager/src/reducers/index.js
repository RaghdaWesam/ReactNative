import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
// must have atleast 1 reducer
export default combineReducers({
  auth: AuthReducer
});

