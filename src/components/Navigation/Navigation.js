import './Navigation.css';

function Navigation({ isOpen, onClose }) {
  return (
    <div className={`navigation ${isOpen && "navigation_opened"}`}>
      <div className="navigation__container">
        <button className="navigation__button" type="button" aria-label="Закрыть" onClick={onClose} />
        <nav className="navigation__menu">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="##">Главная</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link navigation__link_type_active" href="##">Фильмы</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="##">Сохранённые фильмы</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link navigation__link_type_account" href="##">
                <span>Аккаунт</span>
                <div className="navigation__account-img"></div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
  
export default Navigation;
