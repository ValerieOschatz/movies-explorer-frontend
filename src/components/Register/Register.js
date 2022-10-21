import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import './Register.css';
import Auth from '../Auth/Auth';

function Register({ onRegister }) {
  const [name, setName] = useState({ value: '', isValid: true, errorText: '' });
  const [email, setEmail] = useState({ value: '', isValid: true, errorText: '' });
  const [password, setPassword] = useState({ value: '', isValid: true, errorText: '' });
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const isFormValid = name.isValid && email.isValid && password.isValid;

  function handleChangeName(e) {
    setName({ value: e.target.value, isValid: e.target.validity.valid, errorText: 'Имя может содержать только буквы, пробелы и дефис. От 2 до 30 символов.' });
    setButtonDisabled((name.value && email.value && password.value) ? false : true);
  }

  function handleChangeEmail(e) {
    setEmail({ value: e.target.value, isValid: isEmail(e.target.value), errorText: 'Введите корректный email' });
    setButtonDisabled((name.value && email.value && password.value) ? false : true);
  }

  function handleChangePassword(e) {
    setPassword({ value: e.target.value, isValid: e.target.validity.valid, errorText: e.target.validationMessage });
    setButtonDisabled((name.value && email.value && password.value) ? false : true);
  }

  useEffect(() => {
    setName({ value: '', isValid: true, errorText: '' });
    setEmail({ value: '', isValid: true, errorText: '' });
    setPassword({ value: '', isValid: true, errorText: '' });
    setButtonDisabled(true);
  }, []);

  function handleSubmit(e){
    e.preventDefault();

    onRegister(name.value, email.value, password.value);
  }

  return (
    <Auth name="register" onSubmit={handleSubmit}>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <label className="auth__form-field">
        <span className="auth__input-text">Имя</span>
        <input
          className={`auth__input ${!name.isValid && 'auth__input_type_error'}`}
          name="register-name"
          id="register-name"
          type="text"
          required
          value={name.value || ''}
          onChange={handleChangeName}
          minLength="2"
          maxLength="30"
          pattern="[/s a-zA-Zа-яА-ЯёЁ-]+$"
        />
        <span className="auth__input-error">{!name.isValid && name.errorText}</span>
      </label>
      <label className="auth__form-field">
        <span className="auth__input-text">E-mail</span>
        <input
          className={`auth__input ${!email.isValid && 'auth__input_type_error'}`}
          name="register-email"
          id="register-email"
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
          name="register-password"
          id="register-password"
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
        className={`auth__submit-button ${(!isFormValid || isButtonDisabled) && 'auth__submit-button_disabled'}`}
        type="submit"
        disabled={(!isFormValid || isButtonDisabled) && true}>
          Зарегистрироваться
        </button>
      <p className="auth__text">Уже зарегистрированы?<Link to="/signin" className="auth__link">Войти</Link></p>
    </Auth>
  );
}

export default Register;
