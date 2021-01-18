
import './profileStatus.css';
import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: true,
      editMode: false,
      inputValue: ''
    }
  }

  componentDidUpdate() {
    const input = document.querySelector('.profileStatus__input');

    if (input) {
      //console.log(input);
      if (this.state.select) {
        input.focus();
        input.select();
        this.setState({
          select: false
        })
      }
    }
    this.state.inputValue = this.props.userStatus;
  }

  activateEditMode = () => {
    if ( this.props.currentProfile.userId === this.props.authId ) {
      this.setState({
        editMode: true
      });
    }
  }

  deactivateEditMode = (event) => {
    const status = event.target.value;

    this.setState({
      editMode: false,
      select: true
    });

    this.props.updateUserStatus(status);
  }

  setValue(event) {
    event.preventDefault();
    const value = event.target.value;

    this.setState({
      inputValue: value
    });
  }

  render() {
    return (
      <div className="profileStatus">
        {
          this.state.editMode
          ? <input type="text"
              className="profileStatus__input"
              value={this.state.inputValue}
              onChange={(event) => this.setValue(event)}
              onBlur={this.deactivateEditMode}
          />
          : <span className="profileStatus__status"
              onClick={this.activateEditMode}
            >{this.props.userStatus || 'Нет статуса'}
          </span>
        }
      </div>
    )
  }
}

export default ProfileStatus;
