import './App.scss';
import NavBar from './components/NavBar/NavBar.jsx';
import SearchMovie from './components/SearchMovie/SearchMovie.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import Movie from './components/Movie/Movie.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';

export default function App(){
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<SearchMovie />}/>
                <Route path='/favs' element={<Favorites />}/>
                <Route path='/movie/:id' element={<Movie />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    )
}