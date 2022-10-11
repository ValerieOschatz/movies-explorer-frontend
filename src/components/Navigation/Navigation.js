import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navigation__menu">
        <ul className="navigation__list">
          {/* <li><a className="navigation__link" href="##">Регистрация</a></li> */}
          {/* <li><a className="navigation__link navigation__link_type_login" href="##">Войти</a></li> */}
          <li><a className="navigation__link" href="##">Фильмы</a></li>
          <li><a className="navigation__link" href="##">Сохранённые фильмы</a></li>
          <li>
            <a className="navigation__link navigation__link_type_account" href="##">
              Аккаунт
              <div className="navigation__account-img"></div>
            </a>
          </li>
        </ul>
      </nav>

      <button className="navigation__button" type="button">
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}
  
export default Navigation;
