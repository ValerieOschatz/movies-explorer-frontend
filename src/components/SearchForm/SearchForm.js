import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form" name="search-form">
        <label className="search-form__form-field">
          <input className="search-form__input" type="text" id="film-input" name="film-input" placeholder="Фильм" />
          <button className="search-form__button" aria-label="Поиск" />
        </label>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
