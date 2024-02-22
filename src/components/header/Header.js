import { NavLink } from 'react-router-dom';

import './header.scss'

const Header = () => {
    return (
        <header className="header menu">
            <nav className="menu__body">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink exact to="/" className="menu__link" activeStyle={{ 'color': '#9f0013' }}>Admin panel</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/news" className="menu__link" activeStyle={{ 'color': '#9f0013' }}>Current news</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header