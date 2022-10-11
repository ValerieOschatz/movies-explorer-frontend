import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
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
      <Header onNavigationClick={handleNavigationClick} />
      {/* <Main /> */}
      <Movies isLoading={isLoading} />
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
      <Footer />
    </div>
  );
}

export default App;
