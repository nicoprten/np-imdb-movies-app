const initialState = {
    favs: [],
    movies: [],
    detail: {loading: true}
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_MOVIES':
            console.log(action.payload.Search)
            let obj = {};
            let filterArray = [];
            // obj[m.imdbID] ? false : obj[m.imdbID] = true
            let moviesFilter = action.payload.Search.filter((m) => {obj[m.imdbID] ? console.log('esta el id') : obj[m.imdbID] = m});
            console.log(obj)
            for(const m in obj){
                console.log(obj[m])
                filterArray.push(obj[m])
            }
            console.log(filterArray)
            return {
                ...state,
                movies: filterArray
            }
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                detail: {loading: false, data: action.payload}
            }
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