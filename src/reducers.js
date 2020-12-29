import {combineReducers} from 'redux';
import commentById from './Comment/reducer';
import video from './Video/reducer';

export default combineReducers({
  commentById,
  video,
});
