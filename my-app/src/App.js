import './css/main.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';

function App() {
  return (
    <div className="wrapper fixed-container">
      <Header />
      <Aside />
      <Main />
    </div>
  );
}

export default App;
