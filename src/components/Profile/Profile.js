import { useState, useEffect, useContext } from 'react';
import isEmail from 'validator/lib/isEmail';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onSignOut, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState({ value: '', isValid: true, errorText: '' });
  const [email, setEmail] = useState({ value: '', isValid: true, errorText: '' });
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const isFormValid = name.isValid && email.isValid;
  const isChangedValue = name.value !== currentUser.name || email.value !== currentUser.email;

  function handleChangeName(e) {
    setName({ value: e.target.value, isValid: e.target.validity.valid, errorText: 'Имя может содержать только буквы, пробелы и дефис. От 2 до 30 символов.' });
    setButtonDisabled((name.value && email.value && isChangedValue) ? false : true);
  }

  function handleChangeEmail(e) {
    setEmail({ value: e.target.value, isValid: isEmail(e.target.value), errorText: 'Введите корректный email' });
    setButtonDisabled((name.value && email.value && isChangedValue) ? false : true);
  }

  useEffect(() => {
    setName({ value: currentUser.name, isValid: true, errorText: '' });
    setEmail({ value: currentUser.email, isValid: true, errorText: '' });
    setButtonDisabled(true);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateUser(name.value, email.value);
  }

  return (
    <div className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" name="profile" onSubmit={handleSubmit}>
        <label className="profile__form-field">
          <span className="profile__input-error profile-name-input-error">{!name.isValid && name.errorText}</span>
          <span className="profile__input-text">Имя</span>
          <input
            className="profile__input"
            name="profile-name"
            id="profile-name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            value={name.value || ''}
            onChange={handleChangeName}
            pattern="[/s a-zA-Zа-яА-ЯёЁ-]+$"
            placeholder="Имя" />
        </label>
        <label className="profile__form-field">
          <span className="profile__input-error profile-email-input-error">{!email.isValid && email.errorText}</span>
          <span className="profile__input-text">E-mail</span>
          <input
            className="profile__input"
            name="profile-email"
            id="profile-email"
            type="email"
            required
            value={email.value || ''}
            onChange={handleChangeEmail}
            placeholder="E-mail" />
        </label>
        <button
          className={`profile__submit-button ${(!isFormValid || isButtonDisabled) && 'profile__submit-button_disabled'}`}
          type="submit"
          disabled={(!isFormValid || isButtonDisabled) && true}>
            Редактировать
        </button>
      </form>
      <button className="profile__exit-button" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;
