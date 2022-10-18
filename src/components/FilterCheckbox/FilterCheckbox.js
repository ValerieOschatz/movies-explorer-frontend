import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, onCheck }) {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__invisible"
        type="checkbox"
        id="film-checkbox"
        name="film-checkbox"
        checked={isChecked}
        onChange={onCheck} />
      <span className="filter-checkbox__visible" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
