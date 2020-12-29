import { NavLink } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list nav-list">
        <li className="nav-list__item">
          <NavLink to="/prof" className="nav-list__link">Профиль</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/message" className="nav-list__link">Сщщбщения</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/news" className="nav-list__link">Новости</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/music" className="nav-list__link">Музыка</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/users" className="nav-list__link">Пользователи</NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink to="/setting" className="nav-list__link">Настройки</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
