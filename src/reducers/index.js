const initialState = {
    favs: [],
    movies: [],
    detail: {}
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_MOVIES':
            // FIX MOVIE REPEAT
            let obj = {};
            let moviesFilter = action.payload.Search.filter((m) => {
                if(!obj[m.imdbID]){
                    obj[m.imdbID] = 'exist';
                    return m;
                }
            });
            return {
                ...state,
                movies: moviesFilter
            };
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                detail: action.payload
            };
        case 'DEL_DETAIL':
            return{
                ...state,
                detail: {}
            };
        case 'ADD_FAV':
            let movieFav = state.movies.find(m => m.imdbID === action.payload);
            return {
                ...state,
                favs: [...state.favs, movieFav]
            };
        case 'DELETE_FAV':
            let newFavs = state.favs.filter(m => m.imdbID !== action.payload);
            return {
                ...state,
                favs: newFavs
            }
        default:
            return state;
    }
}