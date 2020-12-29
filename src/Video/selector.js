import {createSelector} from 'reselect';

const videoControlSelector = (state) => state.video.control;
const videoByIdSelector = (state) => state.video.videoById;

export const videosSelector = createSelector(
  videoControlSelector,
  videoByIdSelector,
  (videoControl, videoById) => {
    return videoControl.videosIds.map((id, index) => {
      const video = videoById[id];

      return {
        ...video,
        shouldPlay: index == videoControl.index,
        commentsCount: video.commentsIds.length,
      };
    });
  },
);
