const initialState = {
  1: {
    id: 1,
    text: 'its me the first comment',
  },
  2: {
    id: 2,
    text: 'and i am the second one',
  },
};

const commentById = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const {id, text} = action;
      return {...state, [id]: {text}};
    default:
      return state;
  }
};

export default commentById;
