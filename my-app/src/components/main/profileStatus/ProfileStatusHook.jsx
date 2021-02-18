
import './profileStatus.css';
import React, { useState } from 'react';

// class ProfileStatusHook extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       select: true,
//       editMode: false,
//       inputValue: this.props.userStatus
//     }
//   }
//
//   componentDidUpdate(prevProps, prevStste) {
//     // console.log(prevProps.userStatus + 'prevProps');
//     // console.log(this.props.userStatus + 'props');
//     const input = document.querySelector('.profileStatus__input');
//
//     if (input) {
//       //console.log(input);
//       if (this.state.select) {
//         input.focus();
//         input.select();
//         this.setState({
//           select: false
//         })
//       }
//     }
//     if (prevProps.userStatus !== this.props.userStatus) {
//       this.setState({
//         inputValue: this.props.userStatus
//       });
//     }
//   }
//
//   activateEditMode = () => {
//     if ( this.props.currentProfile.userId === this.props.authId ) {
//       this.setState({
//         editMode: true
//       });
//     }
//   }
//
//   deactivateEditMode = (event) => {
//     const status = event.target.value;
//
//     this.setState({
//       editMode: false,
//       select: true
//     });
//
//     this.props.updateUserStatus(status);
//   }
//
//   setValue(event) {
//     event.preventDefault();
//     const value = event.target.value;
//
//     this.setState({
//       inputValue: value
//     });
//   }
//
//   render() {
//     return (
//       <div className="profileStatus">
//         {
//           this.state.editMode
//           ? <input type="text"
//               className="profileStatus__input"
//               value={this.state.inputValue}
//               onChange={(event) => this.setValue(event)}
//               onBlur={this.deactivateEditMode}
//           />
//           : <span className="profileStatus__status"
//               onClick={this.activateEditMode}
//             >{this.props.userStatus || 'Нет статуса'}
//           </span>
//         }
//       </div>
//     )
//   }
// }



const ProfileStatusHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(props.userStatus);

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
