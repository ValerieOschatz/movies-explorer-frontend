import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <label className="search-form__form-field">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button" />
        </label>
        <label className="search-form__checkbox-field">
          <input className="search-form__invisible-checkbox" type="checkbox" />
          <span className="search-form__visible-checkbox" />
          Короткометражки
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
