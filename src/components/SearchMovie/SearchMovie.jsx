// import * as actions from './../../actions/index.js';
// import { bindActionCreators } from 'redux';
import React from 'react';
import './SearchMovie.scss';
import { useState } from 'react';
import { connect } from 'react-redux';
import { getMovies, delMovies } from './../../actions/index.js';
import { Link } from 'react-router-dom';
import { Ring } from '@uiball/loaders';

function SearchMovie(props){
    const [movie, setMovie] = useState('');
    const [checkSearch, setCheckSearch] = useState(false);

    console.log(props.movies)
    React.useEffect(() =>{
        let inputSearch = document.getElementById('inputSearch');
        inputSearch.addEventListener('keydown', (e) => {
            if(e.key === 'Enter'){
                setCheckSearch(true);
                props.delMovies();
                props.getMovies(e.target.value);
                setMovie('');
            }
        });
    }, [])

    return(
        <>
            <div className='container-search'>
                <input id='inputSearch' onChange={(e) => {setMovie(e.target.value)}} placeholder='Search movie' type='text' value={movie}/>
                <button onClick={() =>{
                    setCheckSearch(true);
                    props.delMovies();
                    setMovie(movie)
                    props.getMovies(movie);
                    setMovie('');
                }}>Search</button>
            </div>
            <div className='container-card'>
                {Object.keys(props.movies).length !== 0 ? props.movies.map((m) => 
                    <div className='card' key={m.imdbID}>
                        <img alt={m.Title} src={m.Poster}/>
                        <h2>{m.Title}</h2>
                        <Link to={`/movie/${m.imdbID}`} className='card-to-detail'>
                            View detail
                        </Link>
                    </div>
                ) : checkSearch &&
                <div className="loader">
                    <Ring size={200} lineWeight={5} speed={1} color="#fbdb00" />
                </div>
                }
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

export default connect(mapStateToProps, {getMovies, delMovies})(SearchMovie);