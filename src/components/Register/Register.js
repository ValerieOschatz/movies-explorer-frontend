import { Link } from "react-router-dom";
import './Register.css';
import Auth from '../Auth/Auth';

function Register() {
  return (
    <Auth name="register">
      <h2 className="auth__title">Добро пожаловать!</h2>
      <label className="auth__form-field">
        <span className="auth__input-text">Имя</span>
        <input
          className="auth__input"
          name="register-name"
          id="register-name"
          type="text"
          required
          value="Виталий"
          minLength="2"
          maxLength="30" />
        <span className="auth__input-error register-name-input-error">error-text</span>
      </label>
      <label className="auth__form-field">
        <span className="auth__input-text">E-mail</span>
        <input
          className="auth__input"
          name="register-email"
          id="register-email"
          type="email"
          required
          value="pochta@yandex.ru" />
        <span className="auth__input-error register-email-input-error">error-text</span>
      </label>
      <label className="auth__form-field">
        <span className="auth__input-text">Пароль</span>
        <input
          className="auth__input auth__input_type_error"
          name="register-password"
          id="register-password"
          type="password"
          required
          value="someValue" />
        <span className="auth__input-error register-password-input-error auth__input-error_visible">Что-то пошло не так...</span>
      </label>
      <button className="auth__submit-button" type="submit">Зарегистрироваться</button>
      <p className="auth__text">Уже зарегистрированы?<Link to="/signin" className="auth__link">Войти</Link></p>
    </Auth>
  );
}

export default Register;
