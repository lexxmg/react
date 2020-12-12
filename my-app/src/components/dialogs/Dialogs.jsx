
import './dialogs.css';
import UserList from './userList/UserList';
import UserDialog from './userDialog/UserDialog';
import SendMessage from './sendMessage/SendMessage';

const Dialogs = (props) => {
  const dialogArr = props.dialogs.userDialog.map((obj) => {
    return (
      <UserDialog key={obj.id} name={obj.name} text={obj.post} />
    )
  });

  const userArr = props.dialogs.userData.map((obj) => {
    return (
      <UserList key={obj.id} id={obj.id} userName={obj.name} avatar={obj.avatar} />
    )
  });


  return (
    <div className="doalogs">
      <h2 className="dialogs__title">Диалоги</h2>

      <div className="dialogs__container">
        <div className="dialogs__user">
          <ul className="dialogs__list dialogs-list">
            { userArr }
          </ul>
        </div>

        <div className="dialogs__message">
          { dialogArr }

          <SendMessage
            valueMessage={props.dialogs.valueMessage}
            dispatch={props.dispatch}
            />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
