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

function App() {
  const isLoading = false;
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  function handleNavigationClick() {
    setNavigationOpen(true);
  }

  function closeNavigation() {
    setNavigationOpen(false);
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
    </div>
  );
}

export default App;
