import './dialogs.css';
import UserList from './userList/UserList';
import UserDialog from './userDialog/UserDialog';
import SendMessage from './sendMessage/SendMessage';
import {
  actionCreatorSendMessage,
  actionCreatorSetValueMessage,
  actionCreatorGetFocusMessege
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


let DialogsContainer = (props) => {
  if(!props.isAuth) {
      return <Redirect to="/login" />
  }

  return (
    <div className="doalogs">
      <h2 className="dialogs__title">Диалоги</h2>

      <div className="dialogs__container">
        <div className="dialogs__user">
          <ul className="dialogs__list dialogs-list">

            {
              props.userData.map((obj) => {
                return (
                  <UserList key={obj.id} id={obj.id} userName={obj.name} avatar={obj.avatar} />
                )
              })
            }

          </ul>
        </div>

        <div className="dialogs__message">

          {
            props.userDialog.map((obj) => {
              return (
                <UserDialog key={obj.id} name={obj.name} text={obj.post} />
              )
            })
          }

          <SendMessage
            valueMessage={props.valueMessage}
            sendMessage={props.sendMessage}
            setValue={props.setValue}
            focus={props.focus}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.dialogs.userData,
    userDialog: state.dialogs.userDialog,
    valueMessage: state.dialogs.valueMessage,
    isAuth: state.autch.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (e) => {
      e.preventDefault();

      const text = e.target.text.value;
      dispatch( actionCreatorSendMessage(text) );
    },
    setValue: (e) => {
      const text = e.target.value;
      dispatch( actionCreatorSetValueMessage(text) );
    },
    focus: () => {
      dispatch( actionCreatorGetFocusMessege() );
    }
  }
}

DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);

export default DialogsContainer;
