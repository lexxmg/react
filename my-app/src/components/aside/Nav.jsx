import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list nav-list">
        <li className="nav-list__item">
          <a href="/prof" className="nav-list__link">Профиль</a>
        </li>
        <li className="nav-list__item">
          <a href="/mtssage" className="nav-list__link">Сщщбщения</a>
        </li>
        <li className="nav-list__item">
          <a href="/news" className="nav-list__link">Новости</a>
        </li>
        <li className="nav-list__item">
          <a href="/music" className="nav-list__link">Музыка</a>
        </li>
        <li className="nav-list__item">
          <a href="/setting" className="nav-list__link">Настройки</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
