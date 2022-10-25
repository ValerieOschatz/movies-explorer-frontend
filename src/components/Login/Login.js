import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import isEmail from 'validator/lib/isEmail';
import './Login.css';
import Auth from '../Auth/Auth';

function Login({ onLogin, error }) {
  const [email, setEmail] = useState({ value: '', isValid: true, errorText: '' });
  const [password, setPassword] = useState({ value: '', isValid: true, errorText: '' });
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const isFormValid = email.isValid && password.isValid;

  function handleChangeEmail(e) {
    setEmail({ value: e.target.value, isValid: isEmail(e.target.value), errorText: 'Введите корректный email' });
    setButtonDisabled((email.value && password.value) ? false : true);
  }

  function handleChangePassword(e) {
    setPassword({ value: e.target.value, isValid: e.target.validity.valid, errorText: e.target.validationMessage });
    setButtonDisabled((email.value && password.value) ? false : true);
  }

  useEffect(() => {
    setEmail({ value: '', isValid: true, errorText: '' });
    setPassword({ value: '', isValid: true, errorText: '' });
    setButtonDisabled(true);
  }, []);

  function handleSubmit(e){
    e.preventDefault();

    onLogin(email.value, password.value);
  }

  return (
    <Auth name="login" onSubmit={handleSubmit}>
      <h2 className="auth__title">Рады видеть!</h2>
      <label className="auth__form-field">
        <span className="auth__input-text">E-mail</span>
        <input
          className={`auth__input ${!email.isValid && 'auth__input_type_error'}`}
          name="login-email"
          id="login-email"
          type="email"
          required
          value={email.value || ''}
          onChange={handleChangeEmail}
        />
        <span className="auth__input-error">{!email.isValid && email.errorText}</span>
      </label>
      <label className="auth__form-field">
        <span className="auth__input-text">Пароль</span>
        <input
          className={`auth__input ${!password.isValid && 'auth__input_type_error'}`}
          name="login-password"
          id="login-password"
          type="password"
          required
          minLength="8"
          maxLength="20"
          value={password.value || ''}
          onChange={handleChangePassword}
        />
        <span className="auth__input-error">{!password.isValid && password.errorText}</span>
      </label>
      <button
        className={`auth__submit-button auth__submit-button_type_login ${(!isFormValid || isButtonDisabled) && 'auth__submit-button_disabled'}`}
        type="submit"
        disabled={(!isFormValid || isButtonDisabled) && true}>
          <span className="auth__error">{error}</span>
          Войти
        </button>
      <p className="auth__text">Ещё не зарегистрированы?<Link to="/signup" className="auth__link">Регистрация</Link></p>
    </Auth>
  );
}

export default Login;
