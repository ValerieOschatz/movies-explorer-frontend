import './InfoTooltip.css';
import img_success from '../../images/Union_t.svg';
import img_error from '../../images/Union_f.svg';

function InfoTooltip({ isOpen, onClose, isPositiveAnswer }) {
  const infoText = `${isPositiveAnswer ? 'Успешно!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`;

  return (
    <div className={`info-tooltip ${isOpen && "info-tooltip_opened"}`}>
      <div className="info-tooltip__container">
        <img className="info-tooltip__info-img" src={isPositiveAnswer ? img_success : img_error} alt={isPositiveAnswer ? "Успешно" : "Ошибка"} />
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
