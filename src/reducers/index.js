const initialState = {
    favs: [],
    movies: [],
    detail: {}
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.payload.Search
            }
        case 'GET_MOVIE_DETAIL':
            return 'getting movie detail';
        case 'ADD_FAV':
            return 'adding fav';
        case 'DELETE_FAV':
            return 'deleting from favs';
        default:
            return state;
    }
}