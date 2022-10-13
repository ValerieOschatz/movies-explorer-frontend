import { useState } from 'react';
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
      {/* <Header onNavigationClick={handleNavigationClick} /> */}
      {/* <Main /> */}
      {/* <Movies isLoading={isLoading} cards={movies} /> */}
      {/* <SavedMovies cards={savedMovies} /> */}
      {/* <Profile /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <NotFound />
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
      {/* <Footer /> */}
      <InfoTooltip isOpen={isInfoTooltipOpen} isPositiveAnswer={isPositiveAnswer} onClose={closeInfoTooltip} />
    </div>
  );
}

export default App;
