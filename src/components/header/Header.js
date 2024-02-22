import './header.scss'

const Header = () => {
    return (
        <header className="header menu">
            <nav className="menu__body">
                <ul className="menu__list">
                    <li className="menu__item"><a href="#" className="menu__link">Admin panel</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Current news</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header