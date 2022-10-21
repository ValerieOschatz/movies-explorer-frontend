import './Profile.css';

function Profile({ onSignOut }) {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" name="profile">
        <label className="profile__form-field">
          <span className="profile__input-error profile-name-input-error">error-text</span>
          <span className="profile__input-text">Имя</span>
          <input
            className="profile__input"
            name="profile-name"
            id="profile-name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            // value="Виталий"
            placeholder="Имя" />
        </label>
        <label className="profile__form-field">
          <span className="profile__input-error profile-email-input-error">error-text</span>
          <span className="profile__input-text">E-mail</span>
          <input
            className="profile__input"
            name="profile-email"
            id="profile-email"
            type="email"
            required
            // value="pochta@yandex.ru"
            placeholder="E-mail" />
        </label>
        <button className="profile__submit-button" type="submit">Редактировать</button>
      </form>
      <button className="profile__exit-button" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;
