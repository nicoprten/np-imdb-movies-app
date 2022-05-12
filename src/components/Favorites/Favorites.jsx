import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovieDetail } from './../../actions/index.js'; 
import './Favorites.scss';

function Favorites({moviesFavs, getMovieDetail}){
    return(
        <div className="favorites-container">
            {moviesFavs.length > 0 ? moviesFavs.map((m) => 
                <div className='card' key={m.imdbID}>
                    <img alt={m.Title} src={m.Poster}/>
                    <h2>{m.Title}</h2>
                    <Link to={`/movie/${m.imdbID}`} className='card-to-detail' onClick={() => getMovieDetail(m.imdbID)}> {/* TODO: switchear el button dependiendo si esta o no la peli en favs */}
                        View detail
                    </Link>
                 </div>
                )
                : <h2>There is no favorite movies yet...</h2>
            }
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        moviesFavs: state.favs
    }
}

export default connect(mapStateToProps, {getMovieDetail})(Favorites);