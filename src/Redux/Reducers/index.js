const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CREDENTIALS':
      return {...state, credentials: [...action.payload]};
    case 'ADD_USERS':
      return {...state, users: [...action.payload]};
    default: {
    }
  }
  return state;
};

export default reducer;
