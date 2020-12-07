import { NavLink } from 'react-router-dom';
import './userLiist.css';

const UserList = (props) => {
  let path = '';
  const id = props.id;

  if ( props.path ) {
    path = props.path;
  } else {
    path = '/message';
  }

  return (
    <li className="dialogs-list__item">
      <img src={props.avatar} alt="аватар" className="dialogs-list__img"/>
      <NavLink to={path + '/' + id} className="dialogs-list__link">{props.userName}</NavLink>
    </li>
  );
}

export default UserList;
