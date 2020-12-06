import { NavLink } from 'react-router-dom';
import './dialogs.css';
import Post from '../main/post/Post';

const Dialogs = (props) => {
  return (
    <div className="doalogs">
      <h2 className="dialogs__title">Диалоги</h2>

      <div className="dialogs__container">
        <div className="dialogs__user">
          <ul className="dialogs__list dialogs-list">
            <li className="dialogs-list__item">
              <NavLink to="/message/1" className="dialogs-list__link">userName-1</NavLink>
            </li>
            <li className="dialogs-list__item">
              <NavLink to="/message/2" className="dialogs-list__link">userName-1</NavLink>
            </li>
            <li className="dialogs-list__item">
              <NavLink to="/message/3" className="dialogs-list__link">userName-1</NavLink>
            </li>
            <li className="dialogs-list__item">
              <NavLink to="/message/4" className="dialogs-list__link">userName-1</NavLink>
            </li>
            <li className="dialogs-list__item">
              <NavLink to="/message/5" className="dialogs-list__link">userName-1</NavLink>
            </li>
            <li className="dialogs-list__item">
              <NavLink to="/message/6" className="dialogs-list__link">userName-1</NavLink>
            </li>
          </ul>
        </div>

        <div className="dialogs__message">
          <div className="dialogs__mess dialogs-mess">
            <div className="dialogs-mess__avatar">
              <img src="" alt="аватар" className="dialogs-mess__img"/>

              <span className="dialogs-mess__user-name">UserName</span>
            </div>

            <div className="dialogs-mess__posts">
              <p className="dialogs-mess__text">Lorem+5jhhhhkh jhk jh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus facilis nulla voluptatum, deserunt tenetur eveniet saepe, id provident ducimus, dolorum nesciunt quia, ad commodi iste ullam adipisci temporibus perspiciatis.</p>
            </div>
          </div>

          <Post text="rfrjqnj ag" />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
