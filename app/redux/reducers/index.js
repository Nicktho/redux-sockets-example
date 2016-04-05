import { combineReducers } from 'redux';
import { hello } from './hello';
import { message } from './message';

export default combineReducers({
  hello, message
});
