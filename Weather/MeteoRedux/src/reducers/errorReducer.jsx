// Initial state has to be null
//when the app starts, there is no error

const initialState = null;

//I use this function to for handling errors (works with errorAction.js)
// Set the error in the state and clears it when the error is not there anymore 
// then it returns the current state (null)
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload;
    case 'CLEAR_ERROR':
      return null;
    default:
      return state;
  }
};

export default errorReducer;