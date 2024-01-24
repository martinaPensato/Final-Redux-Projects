//I use this action to show an error message if data is not provided/invalid city is typed

export const setError = (error = 'Oh no! It seems Mother Nature is playing hide-and-seek with our weather info. We are on it, promise!') => ({
    type: 'SET_ERROR',
    payload: error,
  });
  
  export const clearError = () => ({
    type: 'CLEAR_ERROR',
  });