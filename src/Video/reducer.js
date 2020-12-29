import {combineReducers} from 'redux';
const initialState = {
  0: {
    id: 0,
    source: require('../resources/sample-video-6.mov'),
    commentsIds: [1, 2],
  },
  1: {
    id: 1,
    source: require('../resources/sample-video-5.mov'),
    commentsIds: [],
  },
  2: {
    id: 2,
    source: require('../resources/sample-video-6.mov'),
    commentsIds: [],
  },
};

const videoById = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const {videoId, id} = action;
      const video = state[videoId];
      video.commentsIds.push(id);
      return {...state, [videoId]: {...video}};

    default:
      return state;
  }
};
const control = (state = {index: 0, videosIds: [0, 1, 2]}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIDEO_INDEX':
      const {index} = action;
      return {...state, index};
    default:
      return state;
  }
};

export default combineReducers({
  videoById,
  control,
});
