import './css/main.css';
import { Route } from "react-router-dom";
import Header from './components/header/Header';
import Nav from './components/aside/Nav';
import MainContainer from './components/main/main-container';
import Footer from './components/footer/Footer';
import DialogsContainer from './components/dialogs/dialogs-container';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import UserWrrapper from './components/users/UsersContainer';


function App(props) {
  // const prof = props.state.prof,
  //       dialogs = props.state.dialogs,
  //       dispatch = props.state.dispatch;

  return (
    <div className="wrapper fixed-container">
      <Header />

      <aside className="aside">
        <Nav />
      </aside>

      <main className="main">
         <Route exact path="/"
          render={() => {
            return (
              <MainContainer />
            ) } }
         />
         <Route path="/prof"
          render={() => {
            return (
              <MainContainer />
            ) } }
         />
         <Route path="/message" render={() => {
           return (
              <DialogsContainer />
            )
           }
         }
         />
         <Route path="/news" component={News} />
         <Route path="/music" component={Music} />
         <Route path="/users" component={UserWrrapper} />
         <Route path="/setting" component={Settings} />
      </main>
      <Footer name="lexxmg" />
    </div>
  );
}

export default App;
