// lI use this action to handle the loading message that appears during data loading
export const setLoadingMessage = ({ text, color }) => ({
    type: 'SET_LOADING_MESSAGE',
    payload: { text, color }, //I needed to change text and color of the loadingmessage, not just the text
  });
  
  
  export const clearLoadingMessage = () => ({
    type: 'CLEAR_LOADING_MESSAGE',//clears message wehn not needed anymore
  });
  