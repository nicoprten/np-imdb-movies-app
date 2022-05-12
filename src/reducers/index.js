const initialState = {
    favs: [],
    movies: [],
    detail: {loading: true}
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.payload.Search
            }
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                detail: {loading: false, data: action.payload}
            }
        case 'ADD_FAV':
            let movieFav = state.movies.find(m => m.imdbID == action.payload);
            return {
                ...state,
                favs: [...state.favs, movieFav]
            };
        case 'DELETE_FAV':
            return 'deleting from favs';
        default:
            return state;
    }
}