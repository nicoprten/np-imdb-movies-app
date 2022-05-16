import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {addFav, delFav, getMovieDetail, delDetail} from './../../actions/index.js';
import './Movie.scss';


function Movie({delDetail, detail, moviesFavs, addFav, delFav, getMovieDetail}){
    let id = useParams();

    React.useEffect(() =>{
        getMovieDetail(id.id);
        return () => {
            console.log('unmount')
            delDetail();
        }
    }, [])

    return(
        <>
            {Object.keys(detail).length === 0 ? <h2>Loading...</h2> : 
            <div className="detail-container">
                <div className="title-container">
                    <div className="card-container-title">
                        <div className="detail-title">
                            <h2>{detail.Title}</h2>
                            <ul>
                                <li>{detail.Type.charAt(0).toUpperCase() + detail.Type.slice(1)}</li>
                                <li>•</li>
                                <li>{detail.Year}</li>
                                <li>•</li>
                                <li>{detail.Runtime}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='detail-container-rating'>
                        <div className='imdb-rating'>
                            <p>IMDb RATING</p>
                            <div className='rating-details'>
                                <img alt='rating star' src='/images/fav-star.png'/>
                                <div className='rating'>
                                    <p><span id='rating-points'>{detail.imdbRating}</span> / 10</p>
                                    <div className='votes'>
                                        <p>{detail.imdbVotes} votes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='detail-add-fav'>
                            {moviesFavs.find(m => m.imdbID == detail.imdbID) ? <button onClick={() => delFav(detail.imdbID)}>REMOVE FROM FAVS</button> : <button onClick={() => addFav(detail.imdbID)}>ADD TO FAVS</button>}
                        </div>
                    </div>
                </div>
                <div className='more-rating-container'>
                    <p>More Ratings</p>
                    <div className='more-rating'>
                        {/* {console.log(detail.Ratings[1].Source)} */}
                        {detail.Ratings.length > 1 ? 
                        <>
                            <p>{`${detail.Ratings[1].Source} : ${detail.Ratings[1].Value}`}</p>
                            <p>{`${detail.Ratings[2].Source} : ${detail.Ratings[2].Value}`}</p>
                        </> 
                        : <p>No more ratings.</p>}
                        
                    </div>
                </div>
                <div className='info-container'>
                    <div className='poster-container'>
                        <div className='button-triangle'>
                            <div className='triangle'></div>
                            {moviesFavs.find(m => m.imdbID === detail.imdbID) ? <button onClick={() => delFav(detail.imdbID)}>-</button> : <button onClick={() => addFav(detail.imdbID)}>+</button>}
                        </div>
                        <img alt={detail.Title} src={detail.Poster}/>
                    </div>
                    <div className='plot-container'>
                        <ul>
                            <li>{detail.Type}</li>
                            <li>{detail.Genre}</li>
                            <li>{detail.Rated}</li>
                        </ul>
                        <p>{detail.Plot}</p>
                        <ul className='names-container'>
                            <li>
                                <p>Director</p>
                                <a target='_blank' href={`https://www.google.com/search?q=${detail.Director}`}>{detail.Director}</a>
                            </li>
                            <li>
                                <p>Writer</p>
                                {
                                    detail.Writer.split(',').map((w, index) => <a key={index} target='_blank' href={`https://www.google.com/search?q=${w}`}>{w}</a>)
                                }
                            </li>
                            <li>
                                <p>Actors</p>
                                {
                                    detail.Actors.split(',').map((a, index) => <a key={index} target='_blank' href={`https://www.google.com/search?q=${a}`}>{a}</a>)
                                }
                            </li>
                        </ul>
                    </div>
                    <div className='extrainfo-container'>
                        <ul>
                            <li>Country: {detail.Country}</li>
                            <li>Box Office: {detail.BoxOffice}</li>
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

export default connect(mapStateToProps, {addFav, delFav, getMovieDetail, delDetail})(Movie);