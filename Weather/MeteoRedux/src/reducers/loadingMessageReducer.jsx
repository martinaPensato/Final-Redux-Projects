//as per loadingMessageAction.js, initial state has to be null since there is no loading message when app starts
const initialState = {
    text: null,
    color: null,
  };

  //this function menages loading messages when loading data
  const loadingMessageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOADING_MESSAGE': // I provided text and color of my choice
        return {
            text: action.payload.text,
            color: action.payload.color,
          };
      case 'CLEAR_LOADING_MESSAGE': // it clears the loading message when not needed anymore
        return {
            text: null, 
            color: null,
          };
      default:
        return state;
    }
  };
  
  export default loadingMessageReducer;
  