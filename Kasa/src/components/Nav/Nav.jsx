
import { NavLink } from 'react-router-dom';
import '../Nav/nav.scss';

function Nav () {
    return(
        <nav className='nav-bar'>
            
            <NavLink to="/" className={({ isActive }) =>
						isActive ? 'selected' : 'nav-bar__link-home'
					}>
                Accueil
            </NavLink>
            <NavLink to="About" className={({ isActive }) =>
						isActive ? 'selected' : 'nav-bar__link-about'
					}>
                A propos
            </NavLink>

        </nav>
    )
}

export default Nav

