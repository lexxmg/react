
import './profileStatus.css';
import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      status: 'Статус',
      inputValue: ''
    }
  }

  editOn = () => {
    this.setState({
      edit: true
    });
  }

  editOff = () => {
    const status = this.state.inputValue;

    this.setState({
      edit: false,
      status: status
    });
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
          this.state.edit
          ? <input type="text"
              className="profileStatus__input"
              value={this.state.inputValue}
              onChange={(event) => this.setValue(event)}
              onBlur={this.editOff}
          />
          : <span className="profileStatus__status"
              onClick={this.editOn}
            >{this.state.status}
          </span>
        }
      </div>
    )
  }
}

export default ProfileStatus;
