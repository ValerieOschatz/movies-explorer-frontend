import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <div className="nav-tab__container">
        <h2 className="nav-tab__title">О проекте</h2>
        <ul className="nav-tab__list">
          <li>
            <h3 className="nav-tab__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="nav-tab__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li>
            <h3 className="nav-tab__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="nav-tab__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="nav-tab__table">
          <p className="nav-tab__table-text nav-tab__table-text_type_one-week">1 неделя</p>
          <p className="nav-tab__table-text nav-tab__table-text_type_four-week">4 недели</p>
          <p className="nav-tab__table-text nav-tab__table-text_type_additional">Back-end</p>
          <p className="nav-tab__table-text nav-tab__table-text_type_additional">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default NavTab;
