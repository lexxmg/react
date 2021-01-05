
import './css/main.css';
import { Route } from "react-router-dom";
import HeaderContainer from './components/header/HeaderContainer';
import Nav from './components/aside/Nav';
import MainContainer from './components/main/MainContainer';
import Footer from './components/footer/Footer';
import DialogsContainer from './components/dialogs/dialogs-container';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';


//<Route exact path="/" component={MainContainer} />

function App(props) {
  // const prof = props.state.prof,
  //       dialogs = props.state.dialogs,
  //       dispatch = props.state.dispatch;

  return (
    <div className="wrapper fixed-container">
      <HeaderContainer />

      <aside className="aside">
        <Nav />
      </aside>

      <main className="main">
         <Route path="/prof/:userId?" component={MainContainer} />

         <Route path="/message" render={() => {
           return (
              <DialogsContainer />
            )
           }
         }
         />
         <Route path="/news" component={News} />
         <Route path="/music" component={Music} />
         <Route path="/users" component={UsersContainer} />
         <Route path="/setting" component={Settings} />
      </main>
      <Footer name="lexxmg" />
    </div>
  );
}

export default App;
