import './Header.css';
import logo from '../../images/logo.svg';

function Header({ onNavigationClick }) {
  return (
    <header className="header">
      <nav className="header__container">
        <a href="##">
          <img className="header__logo" src={logo} alt="Логотип" />
        </a>

        <ul className="header__list">
          {/* <li><a className="navigation__link" href="##">Регистрация</a></li> */}
          {/* <li><a className="navigation__link navigation__link_type_login" href="##">Войти</a></li> */}
          <li><a className="header__link" href="##">Фильмы</a></li>
          <li><a className="header__link" href="##">Сохранённые фильмы</a></li>
          <li>
            <a className="header__link header__link_type_account" href="##">
              Аккаунт
              <div className="header__account-img"></div>
            </a>
          </li>
        </ul>

        <button className="header__button" type="button" onClick={onNavigationClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
    </header>
  );
}
  
export default Header;
