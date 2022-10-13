import './Auth.css';
import logo from '../../images/logo.svg';

function Auth({ name, children}) {
  return (
    <div className="auth">
      <a href="##">
        <img className="auth__logo" src={logo} alt="Логотип" />
      </a>
      <form className='auth__form' name={name}>
        {children}
      </form>
    </div>
  );
}

export default Auth;
