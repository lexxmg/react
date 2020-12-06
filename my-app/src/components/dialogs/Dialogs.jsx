import { NavLink } from 'react-router-dom';
import './dialogs.css';

const userData = [
  {name: 'Вася', avatar: '', id: '1'},
  {name: 'Петя', avatar: '', id: '2'},
  {name: 'Саша', avatar: '', id: '3'},
]

const userDialog = [
  {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '1'},
  {name: 'Петя', avatar: '', post: 'qwetwerhr', id: '2'}
]

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
            <UserLink id={userData[0].id} userName={userData[0].name} />
            <UserLink id="2" userName="Vasya 425"/>
            <UserLink id="3" userName="Vasya fd"/>
            <UserLink id="4" userName="Vasya fd"/>
            <UserLink id="5" userName="Vasya dfsh"/>
            <UserLink id="6" userName="Vasya dh"/>
            <UserLink id="7" userName="Vasyasdf"/>
            <UserLink id="8" userName="Vasya dfhdj"/>
          </ul>
        </div>

        <div className="dialogs__message">
          <Dialog name={userDialog[0].name} text={userDialog[0].post} />
          <Dialog name="Vasya" text="какой то текст какой то текст какой то текст текст какой то текст"/>
          <Dialog name="Vasya" text="какой то текст какой то текст какой то текст какой то"/>
          <Dialog name="Vasya" text="какой то текст какой то текст какой то текст какой то текст какой то текст"/>
          <Dialog name="Vasya" text="какой то текст какой то текст какой то текст текст какой то текст"/>
          <Dialog name="Vasya" text="какой то текст какой то текст какой то текст какой то"/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
