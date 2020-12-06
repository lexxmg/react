import './css/main.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/header/Header';
import Nav from './components/aside/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper fixed-container">
        <Header />

        <aside className="aside">
          <Nav />
        </aside>

        <main className="main">
           <Route exact path="/" render={() => <Main posts={props.posts} />} />
           <Route path="/prof" render={() => <Main posts={props.posts} />} />
           <Route path="/message" render={() => <Dialogs users={props.userData} dialog={props.userDialog} />} />
           <Route path="/news" component={News} />
           <Route path="/music" component={Music} />
           <Route path="/setting" component={Settings} />
        </main>
        <Footer name="lexxmg" />
      </div>
    </BrowserRouter>
  );
}

export default App;
