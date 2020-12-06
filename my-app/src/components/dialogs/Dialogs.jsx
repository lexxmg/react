import { NavLink } from 'react-router-dom';
import './dialogs.css';



const UserLink = (props) => {
  let path = '';
  const id = props.id;

  if ( props.path ) {
    path = props.path;
  } else {
    path = '/message';
  }

  return (
    <li className="dialogs-list__item">
      <NavLink to={path + '/' + id} className="dialogs-list__link">{props.userName}</NavLink>
    </li>
  );
}

const Dialog = props => {
  return (
    <div className="dialogs__mess dialogs-mess">
      <div className="dialogs-mess__avatar">
        <img src="" alt="аватар" className="dialogs-mess__img"/>

        <span className="dialogs-mess__user-name">{props.name}</span>
      </div>

      <div className="dialogs-mess__posts">
        <p className="dialogs-mess__text">{props.text}</p>
      </div>
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className="doalogs">
      <h2 className="dialogs__title">Диалоги</h2>

      <div className="dialogs__container">
        <div className="dialogs__user">
          <ul className="dialogs__list dialogs-list">
          {
            props.users.map((obj) => {
              return (
                <UserLink key={obj.id} id={obj.id} userName={obj.name} />
              )
            })
          }
          </ul>
        </div>

        <div className="dialogs__message">
        {
          props.dialog.map((obj) => {
            return (
              <Dialog key={obj.id} name={obj.name} text={obj.post} />
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
