
import './profileStatus.css';
import React, { useState, useEffect } from 'react';


const ProfileStatusHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(props.userStatus);

  useEffect(() => {
    const input = document.querySelector('.profileStatus__input');

    if (input) {
      input.focus();
      input.select();
    }
  }, [editMode]);

  useEffect(() => {
    setInputValue(props.userStatus);
  }, [props.userStatus]);

  const setValue = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }

  const activateEditMode = () => {
    if ( props.currentProfile.userId === props.authId ) {
      setEditMode(true);
    }
  }

  const deactivateEditMode = (event) => {
    const value = event.target.value;

    setEditMode(false);

    props.updateUserStatus(value);
  }

  return (
    <div className="profileStatus">
      {
        editMode
        ? <input type="text"
            className="profileStatus__input"
            value={inputValue}
            onChange={setValue}
            onBlur={deactivateEditMode}
        />
        : <span className="profileStatus__status"
            onClick={activateEditMode}
          >{props.userStatus || 'Нет статуса'}
        </span>
      }
    </div>
  )
}

export default ProfileStatusHook;
