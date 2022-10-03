import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__link" href="##">
          <img className="header__logo" src={logo} alt="Логотип" />
        </a>
        <Navigation />
      </div>
    </header>
  );
}
  
export default Header;
