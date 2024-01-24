import { SET_CURRENT_ICON } from '../actions/iconActions';
import { FaUmbrella, FaSun, FaSnowflake, FaWind } from 'react-icons/fa';

// Set the initial state to the umbrella icon (i chose it)
const initialState = <FaUmbrella />; 


// function for managing the current icon showing in button (works with iconAction.js)
const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ICON:
      return action.payload;
    default:
      return state;
  }
};

export default iconReducer;