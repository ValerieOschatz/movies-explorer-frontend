import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/ValerieOschatz/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/ValerieOschatz/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/ValerieOschatz/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
