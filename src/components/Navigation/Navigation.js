import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <nav>
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
    </nav>
  );
}
  
export default Navigation;
