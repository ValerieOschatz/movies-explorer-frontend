import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__invisible" type="checkbox" />
      <span className="filter-checkbox__visible" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
