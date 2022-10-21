import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import { filterByQuery, filterByDuration } from '../../utils/filter';
import { getMovies } from '../../utils/MoviesApi';
import {
  register,
  login,
  logout,
  getCurrentUser
} from '../../utils/MainApi';

function App() {
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
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

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
    if (localStorage.getItem('movies')) {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('query') && localStorage.getItem('searchedMovies') && localStorage.getItem('checkbox')) {
      setQuery({ value: localStorage.getItem('query'), isValid: true });
      setSearchedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
      setChecked(JSON.parse(localStorage.getItem('checkbox')));
    }
  }, []);

  function handleRegister(name, email, password) {
    register(name, email, password)
    .then((res) => {
      if (res) {
        handleLogin(email, password);
        setInfoTooltipOpen(true);
        setSuccess(true);
        setInfoText('Вы успешно зарегистрировались!');
      }
    })
    .catch((err) => {
      setInfoTooltipOpen(true);
      setSuccess(false);
      setInfoText(err);
      console.log(err);
    })
  }

  function handleLogin(email, password) {
    login(email, password)
    .then((res) => {
      if (res.token) {
        console.log(res);
        setLoggedIn(true);
        setCurrentUser(res);
        history.push('/movies');
      }
    })
    .catch((err) => {
      setInfoTooltipOpen(true);
      setSuccess(false);
      setInfoText(err);
      console.log(err);
    })
  }

  function handleSignOut(){
    logout()
    .then((res) => {
      console.log(res);
      setLoggedIn(false);
      localStorage.removeItem('query');
      localStorage.removeItem('searchedMovies');
      localStorage.removeItem('checkbox');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getCurrentUser()
    .then((res) => {
      if (res) {
        setLoggedIn(true);
        setCurrentUser(res);
        history.push('/movies');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header onNavigationClick={handleNavigationClick} isLoggedIn={isLoggedIn} />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoading={isLoading}
            cards={searchedMovies}
            onSearchMovies={handleSearchMovies}
            isChecked={isChecked}
            onCheck={handleCheck}
            query={query}
            onChangeQuery={handleChangeQuery}
            isLoggedIn={isLoggedIn}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            cards={savedMovies}
            isLoggedIn={isLoggedIn}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            onSignOut={handleSignOut}
            isLoggedIn={isLoggedIn}
          />

          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>

          <Route path="/signin">
            <Login onLogin={handleLogin} />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
