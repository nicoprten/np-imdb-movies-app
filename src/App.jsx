import './App.scss';
import NavBar from './components/NavBar/NavBar.jsx';
import SearchMovie from './components/SearchMovie/SearchMovie.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import Movie from './components/Movie/Movie.jsx';
import { Routes, Route } from 'react-router-dom';

export default function App(){
    return(
        <div>
            <NavBar />
            <h1>PRTEN MOVIES APP</h1>
            <Routes>
                <Route path='/' element={<SearchMovie />}/>
                <Route path='/favs' element={<Favorites />}/>
                <Route path='/movie/:id' element={<Movie />}/>
            </Routes>
        </div>
    )
}