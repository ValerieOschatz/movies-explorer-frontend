import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
  const [query, setQuery] = useState({ value: '', isValid: false });
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [infoText, setInfoText] = useState('');
  const [isChecked, setChecked] = useState(false);
  const history = useHistory();
  const location = useLocation();

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

  function handleChangeQuery(e) {
    setQuery({ value: e.target.value, isValid: e.target.validity.valid });
  }

  function handleSearchMovies(query) {
    if (movies.length === 0) {
      getMoviesList();
    }

    let resultMovies;
    resultMovies = filterByQuery(movies, query);
    if (isChecked) {
      resultMovies = filterByDuration(filterByQuery(movies, query));
    }

    if (resultMovies.length > 0) {
      setSearchedMovies(resultMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(resultMovies));
      localStorage.setItem('query', query);
      localStorage.setItem('checkbox', JSON.stringify(isChecked));
    } else {
      setSuccess(false);
      setInfoText('Ничего не найдено');
      setInfoTooltipOpen(true);
    }
  }

  function getMoviesList() {
    setLoading(true);
    getMovies()
    .then((res) => {
      setMovies(res);
      localStorage.setItem('movies', JSON.stringify(res));
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

  useEffect(() => {
    setQuery({ value: localStorage.getItem('query'), isValid: true });
    setMovies(JSON.parse(localStorage.getItem('movies')));
    setSearchedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
    setChecked(JSON.parse(localStorage.getItem('checkbox')));
  }, []);

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
            cards={searchedMovies}
            onSearchMovies={handleSearchMovies}
            isChecked={isChecked}
            onCheck={handleCheck}
            query={query}
            onChangeQuery={handleChangeQuery} />
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
