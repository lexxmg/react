
import './dialogs.css';
import UserList from './userList/UserList';
import UserDialog from './userDialog/UserDialog';

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
                <UserList key={obj.id} id={obj.id} userName={obj.name} avatar={obj.avatar} />
              )
            })
          }
          </ul>
        </div>

        <div className="dialogs__message">
        {
          props.dialog.map((obj) => {
            return (
              <UserDialog key={obj.id} name={obj.name} text={obj.post} />
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
