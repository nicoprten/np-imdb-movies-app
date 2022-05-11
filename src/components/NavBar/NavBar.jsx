import './NavBar.scss';
import {NavLink} from 'react-router-dom';

export default function NavBar(){
    return(
        <div className='container'>
            <NavLink to='/'>
                <img className='container-img' alt='logo prten movies' src='./images/logo.png'/>
            </NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/favs">Favorites</NavLink></li>
            </ul>
        </div>
    )
}