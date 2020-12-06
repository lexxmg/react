import './css/main.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Nav from './components/aside/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Dialogs from './components/dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper fixed-container">
        <Header />

        <aside className="aside">
          <Nav />
        </aside>

        <main className="main">
           <Route path="/prof" component={Main} />
           <Route path="/message" component={Dialogs} />
        </main>
        <Footer name="lexxmg" />
      </div>
    </BrowserRouter>
  );
}

export default App;
