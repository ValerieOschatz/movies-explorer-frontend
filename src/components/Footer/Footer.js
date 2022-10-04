import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__menu">
          <p className="footer__copyright">&copy; 2022</p>
          <nav>
            <ul className="footer__nav">
              <li><a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
              <li><a className="footer__link" href="https://github.com/ValerieOschatz" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
