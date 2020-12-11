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
  const posts = props.state.prof.posts,
        users = props.state.dialogs.userData,
        dialog = props.state.dialogs.userDialog,
        sendMessage = props.sendMessage,
        addPost = props.addPost,
        valuePost = props.state.prof.valuePost,
        setValueMessage = props.setValueMessage,
        valueMessage = props.state.dialogs.valueMessage,
        setValuePost = props.setValuePost,
        getFocusMessege = props.getFocusMessege,
        getFocusPost = props.getFocusPost;
//debugger;
  return (
    <BrowserRouter>
      <div className="wrapper fixed-container">
        <Header />

        <aside className="aside">
          <Nav />
        </aside>

        <main className="main">
           <Route exact path="/"
            render={() => {
              return (
              <Main posts={posts}
                addPost={addPost}
                valuePost={valuePost}
                setValuePost={setValuePost}
                getFocusPost={getFocusPost}
              />) } }
           />
           <Route path="/prof"
            render={() => {
              return (
              <Main posts={posts}
                addPost={addPost}
                valuePost={valuePost}
                setValuePost={setValuePost}
                getFocusPost={getFocusPost}
             /> )} }
           />
           <Route path="/message" render={() => {
             return (
                <Dialogs users={users}
                dialog={dialog}
                sendMessage={sendMessage}
                valueMessage={valueMessage}
                setValueMessage={setValueMessage}
                getFocusMessege={getFocusMessege} />
              )
             }
           }
           />
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
