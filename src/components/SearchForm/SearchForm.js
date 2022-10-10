import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <label className="search-form__form-field">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button" />
        </label>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
