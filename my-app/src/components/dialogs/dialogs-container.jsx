
import './dialogs.css';
import UserList from './userList/UserList';
import UserDialog from './userDialog/UserDialog';
import SendMessage from './sendMessage/SendMessage';
import {
  actionCreatorSendMessage,
  actionCreatorSetValueMessage,
  actionCreatorGetFocusMessege
} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {
  return (
    <div className="doalogs">
      <h2 className="dialogs__title">Диалоги</h2>

      <div className="dialogs__container">
        <div className="dialogs__user">
          <ul className="dialogs__list dialogs-list">
            <StoreContext.Consumer>
              {
                (store) => {
                  return (
                    store.getState().dialogs.userData.map((obj) => {
                      return (
                        <UserList key={obj.id} id={obj.id} userName={obj.name} avatar={obj.avatar} />
                      )
                    })
                  )
                }
              }
            </StoreContext.Consumer>
          </ul>
        </div>

        <div className="dialogs__message">
          <StoreContext.Consumer>
            {
              (store) => {
                return (
                  store.getState().dialogs.userDialog.map((obj) => {
                    return (
                      <UserDialog key={obj.id} name={obj.name} text={obj.post} />
                    )
                  })
                )
              }
            }
          </StoreContext.Consumer>

          <StoreContext.Consumer>
            {
              (store) => {
                function sendMessage(e) {
                  e.preventDefault();

                  const text = e.target.text.value;
                  store.dispatch( actionCreatorSendMessage(text) );
                }

                function setValue(e) {
                  const text = e.target.value;
                  store.dispatch( actionCreatorSetValueMessage(text) );
                }

                function focus() {
                  store.dispatch( actionCreatorGetFocusMessege() );
                }

                return (
                  <SendMessage
                    valueMessage={store.getState().dialogs.valueMessage}
                    sendMessage={sendMessage}
                    setValue={setValue}
                    focus={focus}
                  />
                )
              }
            }
          </StoreContext.Consumer>
        </div>
      </div>
    </div>
  );
}

export default DialogsContainer;
