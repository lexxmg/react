import './css/main.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="wrapper fixed-container">
      <Header />
      <Aside />
      <Main />
      <Footer name="lexxmg" />
    </div>
  );
}

export default App;
