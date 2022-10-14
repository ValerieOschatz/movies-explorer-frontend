import { Route, Link, Switch, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';

function Header({ onNavigationClick }) {
  const location = useLocation();
  const headerClassName = `header ${location.pathname === '/' && 'header_promo'}`;

  return (
    <header className={headerClassName}>
      <nav className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>

          <Switch>
            <Route exact path="/">
              <ul className="header__list">
                <li>
                  <Link to="/signup" className="header__link header__link_promo">Регистрация</Link>
                </li>
                <li>
                  <Link to="/signin" className="header__link header__link_promo header__link_type_login">Войти</Link>
                </li>
              </ul>
            </Route>

            <Route path="/movies">
              <ul className="header__list">
                <li>
                  <Link to="/movies" className="header__link">Фильмы</Link>
                </li>
                <li>
                  <Link to="/saved-movies" className="header__link header__link_type_saved-movies">Сохранённые фильмы</Link>
                </li>
                <li>
                  <Link to="/profile" className="header__link header__link_type_account">
                    Аккаунт
                    <div className="header__account-img"></div>
                  </Link>
                </li>
              </ul>
              <button className="header__button" type="button" onClick={onNavigationClick}>
                <div></div>
                <div></div>
                <div></div>
              </button>
            </Route>

            <Route path="/saved-movies">
              <ul className="header__list">
                <li>
                  <Link to="/movies" className="header__link">Фильмы</Link>
                </li>
                <li>
                  <Link to="/saved-movies" className="header__link header__link_type_saved-movies">Сохранённые фильмы</Link>
                </li>
                <li>
                  <Link to="/profile" className="header__link header__link_type_account">
                    Аккаунт
                    <div className="header__account-img"></div>
                  </Link>
                </li>
              </ul>
              <button className="header__button" type="button" onClick={onNavigationClick}>
                <div></div>
                <div></div>
                <div></div>
              </button>
            </Route>
          </Switch>
      </nav>
    </header>
  );
}
  
export default Header;
