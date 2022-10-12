import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" name="profile">
        <label className="profile__form-field">
          <span className="profile__input-text">Имя</span>
          <input
            className="profile__input"
            name="profile-name"
            id="profile-name"
            type="text"
            required
            value="Виталий" />
        </label>
        <label className="profile__form-field">
          <span className="profile__input-text">E-mail</span>
          <input
            className="profile__input"
            name="profile-email"
            id="profile-email"
            type="email"
            required
            value="pochta@yandex.ru" />
        </label>
        <button className="profile__submit-button" type="submit">Редактировать</button>
      </form>
      <button className="profile__exit-button" type="button">Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;
