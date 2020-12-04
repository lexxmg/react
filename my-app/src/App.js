import './css/main.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Dialogs from './components/dialogs/Dialogs';

function App() {
  return (
    <div className="wrapper fixed-container">
      <Header />
      <Aside />
      <main className="main">
         <Main />
      </main>
      <Footer name="lexxmg" />
    </div>
  );
}

export default App;
