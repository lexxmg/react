import './css/main.css';

function App() {
  return (
    <div className="wrapper fixed-container">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEUvgYC6_i_LzHV9-qVIJRLhkGA7jnprtUw&usqp=CAU" alt="logo" className="header__img"/>
      </header>

      <aside className="aside">
        <nav className="nav">
          <ul className="nav__list nav-list">
            <li className="nav-list__item">
              <a href="#" className="nav-list__link">*/8</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__link">*/8</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__link">*/8</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__link">*/8</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__link">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <div className="main__top main-top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VIao5Ctz-GHVJSqedPhPDk1lz6DiHh7WTg&usqp=CAU" alt="подсолнухи" className="main-top__img"/>
        </div>

        <div className="user">
          <div className="user__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU" alt="дрын" className="user__img"/>
          </div>

          <div className="user__info">
            <h2 className="user__title">Дрын Дрыныч</h2>

            <ul className="user__list user-list">
              <li className="user-list__item">
                <span className="user-list__dada">Date of brith:</span>
                <span className="user-list__text">7 feb</span>
              </li>
              <li className="user-list__item">
                <span className="user-list__dada">City:</span>
                <span className="user-list__text">Moscow</span>
              </li>
              <li className="user-list__item">
                <span className="user-list__dada">Ed:</span>
                <span className="user-list__text">333</span>
              </li>
              <li className="user-list__item">
                <span className="user-list__dada">Web:</span>
                <span className="user-list__text">www</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="post">
          <h2 className="post__title">My posts</h2>

          <form className="post__form">
            <textarea name="text" className="post__textarea"></textarea>

            <button className="post__btn">send</button>
          </form>

          <div className="post__post post-post">
            <div className="post-post__ava"></div>
            <p className="post-post__text">какой то пост</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
