import { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({ query: '', isValid: false });
  const [errorText, setErrorText] = useState('');

  function handleChangeQuery(evt) {
    setQuery({ query: evt.target.value, isValid: evt.target.validity.valid });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    if (!query.isValid) {
      setErrorText('Нужно ввести ключевое слово');
    } else {
      onSearch(query.query);
    }
  }

  useEffect(() => {
    setErrorText('');
  }, [query]);

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        name="search-form"
        noValidate
        onSubmit={handleSubmit}
        >
        <label className="search-form__form-field">
          <input
            className="search-form__input"
            type="text"
            id="film-input"
            name="film-input"
            placeholder="Фильм"
            required
            onChange={handleChangeQuery}
            value={query.query || ''}
          />
          <button className="search-form__button" aria-label="Поиск" />
          <span className="search-form__input-error film-input-error">
            {!query.isValid && errorText}
          </span>
        </label>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
