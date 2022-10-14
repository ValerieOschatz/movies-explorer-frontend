import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';

function Header({ onNavigationClick, isLoggedIn }) {
  const location = useLocation();
  const headerClassName = `header ${location.pathname === '/' && 'header_promo'}`;
  const headerLinkClassName = `header__link ${location.pathname === '/' && 'header__link_promo'}`;
  const headerButtonClassName = `header__button ${location.pathname === '/' && 'header__button_promo'}`;

  if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') {

    return (
      <header className={headerClassName}>
        <nav className="header__container">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип" />
          </Link>

          {isLoggedIn ? (
            <>
            <ul className="header__list">
              <li>
                <Link to="/movies" className={headerLinkClassName}>Фильмы</Link>
              </li>
              <li>
                <Link to="/saved-movies" className={`${headerLinkClassName} header__link_type_saved-movies`}>Сохранённые фильмы</Link>
              </li>
              <li>
                <Link to="/profile" className={`${headerLinkClassName} header__link header__link_type_account`}>
                  Аккаунт
                  <div className="header__account-img"></div>
                </Link>
              </li>
            </ul>
            <button className={headerButtonClassName} type="button" onClick={onNavigationClick}>
              <div></div>
              <div></div>
              <div></div>
            </button>
            </>
          ) : (
            <ul className="header__list header__list_promo">
            <li>
              <Link to="/signup" className={headerLinkClassName}>Регистрация</Link>
            </li>
            <li>
              <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
            </li>
          </ul>
          )}
        </nav>
      </header>
    )
  }
}
  
export default Header;
