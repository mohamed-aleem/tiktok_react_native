import {createSelector} from 'reselect';

const videoByIdSelector = (state) => state.video.videoById;
const commentByIdSelector = (state) => state.commentById;

export const commentsSelector = (state, {videoId}) => {
  const videoById = videoByIdSelector(state);
  const commentById = commentByIdSelector(state);

  const video = videoById[videoId];
  const comments = video.commentsIds.map((id) => commentById[id]);
  return comments;
};
