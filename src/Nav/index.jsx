import './Nav.scss';

const Nav = () => {
    return (
        <nav id="navbar" className="container">
            <div className="navbar__wrapper">
                <button className="navbar__wrapper__contact title-spaced">Get in touch</button>
                <button className="navbar__wrapper__logo title-spaced">Kokonoka</button>
                <button className="navbar__wrapper__hamburger">=</button>
            </div>
        </nav>
    )
}

export default Nav;