import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {addFav, delFav, getMovieDetail} from './../../actions/index.js';
import './Movie.scss';


function Movie({detail, moviesFavs, addFav, delFav, getMovieDetail}){
    console.log(detail);
    let id = useParams();
    React.useEffect(() => {
        console.log('rendereizando')
        console.log(id)
        getMovieDetail(id.id);
    }, []);
    return(
        <>
            {detail.loading ? <h2>Loading...</h2> : 
            <div className="detail-container">
                <div className="title-container">
                    <div className="card-container-title">
                        <div className="detail-title">
                            <h2>{detail.data.Title}</h2>
                            <ul>
                                <li>{detail.data.Type.charAt(0).toUpperCase() + detail.data.Type.slice(1)}</li>
                                <li>•</li>
                                <li>{detail.data.Year}</li>
                                <li>•</li>
                                <li>{detail.data.Runtime}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='detail-container-rating'>
                        <div className='imdb-rating'>
                            <p>IMDb RATING</p>
                            <div className='rating-details'>
                                <img alt='rating star' src='/images/fav-star.png'/>
                                <div className='rating'>
                                    <p><span id='rating-points'>{detail.data.imdbRating}</span> / 10</p>
                                    <div className='votes'>
                                        <p>{detail.data.imdbVotes} votes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='detail-add-fav'>
                            {moviesFavs.find(m => m.imdbID == detail.data.imdbID) ? <button onClick={() => delFav(detail.data.imdbID)}>REMOVE FROM FAVS</button> : <button onClick={() => addFav(detail.data.imdbID)}>ADD TO FAVS</button>}
                        </div>
                    </div>
                </div>
                <div className='more-rating-container'>
                    <p>More Ratings</p>
                    <div className='more-rating'>
                        {/* {console.log(detail.data.Ratings[1].Source)} */}
                        {detail.data.Ratings.length > 1 ? 
                        <>
                            <p>{`${detail.data.Ratings[1].Source} : ${detail.data.Ratings[1].Value}`}</p>
                            <p>{`${detail.data.Ratings[2].Source} : ${detail.data.Ratings[2].Value}`}</p>
                        </> 
                        : <p>No more ratings.</p>}
                        
                    </div>
                </div>
                <div className='info-container'>
                    <div className='poster-container'>
                        <div className='button-triangle'>
                            <div className='triangle'></div>
                            {moviesFavs.find(m => m.imdbID === detail.data.imdbID) ? <button onClick={() => delFav(detail.data.imdbID)}>-</button> : <button onClick={() => addFav(detail.data.imdbID)}>+</button>}
                        </div>
                        <img alt={detail.data.Title} src={detail.data.Poster}/>
                    </div>
                    <div className='plot-container'>
                        <ul>
                            <li>{detail.data.Type}</li>
                            <li>{detail.data.Genre}</li>
                            <li>{detail.data.Rated}</li>
                        </ul>
                        <p>{detail.data.Plot}</p>
                        <ul className='names-container'>
                            <li>
                                <p>Director</p>
                                <a target='_blank' href={`https://www.google.com/search?q=${detail.data.Director}`}>{detail.data.Director}</a>
                            </li>
                            <li>
                                <p>Writer</p>
                                {
                                    detail.data.Writer.split(',').map((w, index) => <a key={index} target='_blank' href={`https://www.google.com/search?q=${w}`}>{w}</a>)
                                }
                            </li>
                            <li>
                                <p>Actors</p>
                                {
                                    detail.data.Actors.split(',').map((a, index) => <a key={index} target='_blank' href={`https://www.google.com/search?q=${a}`}>{a}</a>)
                                }
                            </li>
                        </ul>
                    </div>
                    <div className='extrainfo-container'>
                        <ul>
                            <li>Country: {detail.data.Country}</li>
                            <li>Box Office: {detail.data.BoxOffice}</li>
                        </ul>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail,
        moviesFavs: state.favs
    }
}

export default connect(mapStateToProps, {addFav, delFav, getMovieDetail})(Movie);