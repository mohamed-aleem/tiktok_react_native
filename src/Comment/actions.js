export const addComment = ({videoId, text}) => ({
  type: 'ADD_COMMENT',
  id: Math.random() * 1000,
  videoId,
  text,
});
