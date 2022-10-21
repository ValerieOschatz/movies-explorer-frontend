import { Link } from "react-router-dom";
import './Auth.css';
import logo from '../../images/logo.svg';

function Auth({ name, children}) {
  return (
    <div className="auth">
      <Link to="/">
        <img className="auth__logo" src={logo} alt="Логотип" />
      </Link>
      <form className='auth__form' name={name} noValidate>
        {children}
      </form>
    </div>
  );
}

export default Auth;
