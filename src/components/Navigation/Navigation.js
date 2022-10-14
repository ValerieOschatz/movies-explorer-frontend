import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation({ isOpen, onClose }) {
  return (
    <div className={`navigation ${isOpen && "navigation_opened"}`}>
      <div className="navigation__container">
        <button className="navigation__button" type="button" aria-label="Закрыть" onClick={onClose} />
        <nav className="navigation__menu">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink exact to="/" className="navigation__link" activeClassName="navigation__link_type_active" onClick={onClose}>Главная</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_type_active" onClick={onClose}>Фильмы</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_type_active" onClick={onClose}>Сохранённые фильмы</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/profile" className="navigation__link navigation__link_type_account" activeClassName="navigation__link_type_active" onClick={onClose}>
                <span>Аккаунт</span>
                <div className="navigation__account-img"></div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
  
export default Navigation;
