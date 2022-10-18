import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { getMovies } from '../../utils/MoviesApi';
import { filterByQuery, filterByDuration } from '../../utils/filter';

function App() {
  const isLoggedIn = false;

  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [infoText, setInfoText] = useState('');
  const [isChecked, setChecked] = useState(false);

  function handleNavigationClick() {
    setNavigationOpen(true);
  }

  function closeNavigation() {
    setNavigationOpen(false);
  }

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  }

  function handleCheck() {
    setChecked(!isChecked);
  }

  function handleSearch(query) {
    setLoading(true);
    getMovies()
    .then((res) => {
      let searchedMovies;
      if (isChecked) {
        searchedMovies = filterByDuration(filterByQuery(res, query));
      } else {
        searchedMovies = filterByQuery(res, query);
      }
      if (searchedMovies.length > 0) {
        console.log(searchedMovies);
        setMovies(searchedMovies);
      } else {
        setSuccess(false);
        setInfoText('Ничего не найдено');
        setInfoTooltipOpen(true);
      }
    })
    .catch((err) => {
      console.log(err);
      setSuccess(false);
      setInfoText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      setInfoTooltipOpen(true);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="App">
      <Header onNavigationClick={handleNavigationClick} isLoggedIn={isLoggedIn} />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies
            isLoading={isLoading}
            cards={movies}
            onSearch={handleSearch}
            isChecked={isChecked}
            onCheck={handleCheck} />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies cards={savedMovies} />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        isSuccess={isSuccess}
        infoText={infoText}
        onClose={closeInfoTooltip} />
    </div>
  );
}

export default App;
