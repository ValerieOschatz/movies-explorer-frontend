import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {
  const isLoading = false;

  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Movies isLoading={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
