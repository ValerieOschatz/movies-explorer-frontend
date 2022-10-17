import './InfoTooltip.css';
import img_success from '../../images/Union_t.svg';
import img_error from '../../images/Union_f.svg';

function InfoTooltip({ isOpen, onClose, isSuccess, infoText }) {
  return (
    <div className={`info-tooltip ${isOpen && "info-tooltip_opened"}`}>
      <div className="info-tooltip__container">
        <img className="info-tooltip__info-img" src={isSuccess ? img_success : img_error} alt={isSuccess ? "Успешно" : "Ошибка"} />
        <p className="info-tooltip__info-text">{infoText}</p>
        <button
          className="info-tooltip__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          >
        </button>
      </div>
    </div>
  );
}
  
export default InfoTooltip;
