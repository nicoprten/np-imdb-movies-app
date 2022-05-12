const axios = require('axios');
const apiKey = '4ef335cb';
// TODO call api detail movie: https://www.omdbapi.com/?apikey=4ef335cb&i=tt2975590

export function getMovies(title){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
        .then(r => r.json())
        .then(d => dispatch({type: 'GET_MOVIES', payload: d}))
        .catch(e => console.log(e));
    }
}
export function getMovieDetail(id){
    return function(dispatch){
        return axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(r => r.data)
        .then(d => dispatch({type: 'GET_MOVIE_DETAIL', payload: d}))
        .catch(e => console.log(e));
    }
}
export function addFav(id){
    return {
        type: 'ADD_FAV',
        id
    }
}
export function delFav(id){
    return {
        type: 'DELETE_FAV',
        id
    }
}