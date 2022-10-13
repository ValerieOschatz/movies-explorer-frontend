import './Login.css';
import Auth from '../Auth/Auth';

function Login() {
  return (
    <Auth name="login">
      <h2 className="auth__title">Рады видеть!</h2>
      <label className="auth__form-field">
        <span className="auth__input-text">E-mail</span>
        <input
          className="auth__input"
          name="login-email"
          id="login-email"
          type="email"
          required
          value="pochta@yandex.ru" />
        <span className="auth__input-error login-email-input-error">error-text</span>
      </label>
      <label className="auth__form-field">
        <span className="auth__input-text">Пароль</span>
        <input
          className="auth__input auth__input_type_error"
          name="login-password"
          id="login-password"
          type="password"
          required />
        <span className="auth__input-error login-password-input-error">error-text</span>
      </label>
      <button className="auth__submit-button auth__submit-button_type_login" type="submit">Войти</button>
      <p className="auth__text">Ещё не зарегистрированы?<a className="auth__link" href="##">Регистрация</a></p>
    </Auth>
  );
}

export default Login;
