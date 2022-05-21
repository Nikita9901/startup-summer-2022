const initialState = "";

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PERSON":
      return action.payload;
    default:
      return state;
  }
};

export default personReducer;
