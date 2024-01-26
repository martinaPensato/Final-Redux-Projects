export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


// this action is for adding jobs in favorites 
export const addFavorite = (title) => {
    return {
        type: ADD_FAVORITE,
        payload: title
    }
}

// this action is for removing jobs from favorites 
export const removeFavorite = (title) => {
    return {
        type: REMOVE_FAVORITE,
        payload: title
    }
} 