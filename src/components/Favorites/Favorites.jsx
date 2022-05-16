import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovieDetail, delFav } from './../../actions/index.js'; 
import './Favorites.scss';
// import './../SearchMovie/SearchMovie.scss';

function Favorites({moviesFavs, getMovieDetail, delFav}){
    return(
        <div className="container-favs">
            {moviesFavs.length > 0 ? moviesFavs.map((m) => 
                <div className='card' key={m.imdbID}>
                    <img alt={m.Title} src={m.Poster}/>
                    <div className='card-info'>
                        <h2>{m.Title}</h2>
                        <Link to={`/movie/${m.imdbID}`} className='card-to-detail' onClick={() => getMovieDetail(m.imdbID)}>
                            View detail
                        </Link>
                        <button onClick={() => delFav(m.imdbID)}>
                            Remove
                        </button>
                    </div>
                </div>
                )
                : <h2>There are no favorite movies yet...</h2>
            }
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        moviesFavs: state.favs
    }
}

export default connect(mapStateToProps, {getMovieDetail, delFav})(Favorites);