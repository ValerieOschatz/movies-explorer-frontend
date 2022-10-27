import { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ isChecked, onCheck, onSearchMovies, onSearchShortMovies, query, onChangeQuery }) {
  const [errorText, setErrorText] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
  
    if (!query.isValid) {
      setErrorText('Нужно ввести ключевое слово');
    } else {
      onSearchMovies(query.value);
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
            onChange={onChangeQuery}
            value={query.value || ''}
          />
          <button className="search-form__button" type="submit" aria-label="Поиск" />
          <span className="search-form__input-error">
            {!query.isValid && errorText}
          </span>
        </label>
        <FilterCheckbox
          isChecked={isChecked}
          onCheck={onCheck}
          onSearchShortMovies={onSearchShortMovies}
          query={query}
        />
      </form>
    </section>
  );
}

export default SearchForm;
