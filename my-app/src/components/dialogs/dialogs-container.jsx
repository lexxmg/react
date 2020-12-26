
import './dialogs.css';
import UserList from './userList/UserList';
import UserDialog from './userDialog/UserDialog';
import SendMessage from './sendMessage/SendMessage';
import {
  actionCreatorSendMessage,
  actionCreatorSetValueMessage,
  actionCreatorGetFocusMessege
} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const dialogArr = state.dialogs.userDialog.map((obj) => {
    return (
      <UserDialog key={obj.id} name={obj.name} text={obj.post} />
    )
  });

  const userArr = state.dialogs.userData.map((obj) => {
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
            valueMessage={state.dialogs.valueMessage}
            sendMessage={sendMessage}
            setValue={setValue}
            focus={focus}
            />
        </div>
      </div>
    </div>
  );

  function sendMessage(e) {
    e.preventDefault();

    const text = e.target.text.value;

    //props.sendMessage(text);
    props.store.dispatch( actionCreatorSendMessage(text) );
    //props.setValueMessage('');
  }

  function setValue(e) {
    const text = e.target.value;
    //props.setValueMessage(newPostElement.current.value);
    props.store.dispatch( actionCreatorSetValueMessage(text) );
  }

  function focus() {
    props.store.dispatch( actionCreatorGetFocusMessege() );
  }
}

export default DialogsContainer;
