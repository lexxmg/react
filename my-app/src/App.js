
import './css/main.css';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from "react-router-dom";
import HeaderContainer from './components/header/HeaderContainer';
import Nav from './components/aside/Nav';
import MainContainer from './components/main/MainContainer';
import Footer from './components/footer/Footer';
import DialogsContainer from './components/dialogs/dialogs-container';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';
import LoginContainer from './components/login/LoginContainer';
import { getAuthUser } from './redux/auth-reducer';

//<Route exact path="/" component={MainContainer} />

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUser();
  }
  // const prof = props.state.prof,
  //       dialogs = props.state.dialogs,
  //       dispatch = props.state.dispatch;

  render() {
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
           <Route path="/login" component={LoginContainer} />
        </main>
        <Footer name="lexxmg" />
      </div>
    )
  }
}

export default compose(
  connect(null, {getAuthUser}),
  withRouter
)(App);
