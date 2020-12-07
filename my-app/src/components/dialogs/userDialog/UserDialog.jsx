import './userDialogs.css';

const UserDialog = (props) => {
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
  );
}

export default UserDialog;
