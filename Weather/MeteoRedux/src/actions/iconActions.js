//I use this action to handle the icons in the main page search button
export const SET_CURRENT_ICON = 'SET_CURRENT_ICON';

export const setCurrentIcon = (icon) => ({
  type: SET_CURRENT_ICON,
  payload: icon,
});