import './AboutMe.css';
import photo from '../../images/photo.jpeg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info-container">
          <div className="about-me__text-container">
            <h3 className="about-me__name">Валерия</h3>
            <p className="about-me__about">Фронтенд-разработчик, 27 лет</p>
            <p className="about-me__info">
              Родилась в Чебоксарах, училась в Москве, в Институте Стали и Сплавов на специальности Промышленный менеджмент. 
              После окончания переехала в Петербург, работала бухгалтером. Люблю музыку, путешествия и шахматы. 
              Люблю писать код, хочу связать с этим свою жизнь.
            </p>
            <a className="about-me__link" href="https://github.com/ValerieOschatz" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото профиля" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
