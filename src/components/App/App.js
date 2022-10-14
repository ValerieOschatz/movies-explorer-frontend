import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { movies, savedMovies } from '../../utils/cards';
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

function App() {
  const isLoading = false;
  const isPositiveAnswer = true;
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

  function handleNavigationClick() {
    setNavigationOpen(true);
  }

  function closeNavigation() {
    setNavigationOpen(false);
  }

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  }

  return (
    <div className="App">
      <Header onNavigationClick={handleNavigationClick} />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies isLoading={isLoading} cards={movies} />
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
      <InfoTooltip isOpen={isInfoTooltipOpen} isPositiveAnswer={isPositiveAnswer} onClose={closeInfoTooltip} />
    </div>
  );
}

export default App;
