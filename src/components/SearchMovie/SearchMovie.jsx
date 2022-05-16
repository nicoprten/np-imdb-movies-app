// import * as actions from './../../actions/index.js';
// import { bindActionCreators } from 'redux';
import React from 'react';
import './SearchMovie.scss';
import { useState } from 'react';
import { connect } from 'react-redux';
import { getMovies } from './../../actions/index.js';
import { Link } from 'react-router-dom';

function SearchMovie(props){
    const [movie, setMovie] = useState('');

    return(
        <>
            <div className='container-search'>
                <input onChange={(e) => {setMovie(e.target.value)}} placeholder='Search movie' type='text' value={movie}/>
                <button onClick={() =>{
                    console.log(movie);
                    props.getMovies(movie);
                    setMovie('');
                }}>Search</button>
            </div>
            <div className='container-card'>
                {props.movies.length > 0 ? props.movies.map((m) => 
                    <div className='card' key={m.imdbID}>
                        <img alt={m.Title} src={m.Poster}/>
                        <h2>{m.Title}</h2>
                        <Link to={`/movie/${m.imdbID}`} className='card-to-detail'>
                            View detail
                        </Link>
                    </div>
                ) : <h2>We couldn't find any results for your search.</h2>}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMovies: (movie) => dispatch(getMovies(movie))
//     }
// }

export default connect(mapStateToProps, {getMovies})(SearchMovie);