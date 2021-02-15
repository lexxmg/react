
import './dialogs.css';
import UserList from './userList/UserList';
import UserDialog from './userDialog/UserDialog';
import SendMessage from './sendMessage/SendMessage';
import { sendMessage } from '../../redux/dialogs-reducer';
import { gerUserData, gerUserDialogs } from '../../redux/dialogs-selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';


let DialogsContainer = (props) => {
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

          <SendMessage sendMessage={props.sendMessage} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: gerUserData(state),
    userDialog: gerUserDialogs(state)
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    sendMessage: (formData) => {
      dispatch(sendMessage(formData.text))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispathToProps),
  WithAuthRedirect
)(DialogsContainer);
