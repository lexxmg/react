
import React from 'react';
import Login from './Login/login'

class LoginContainer extends React.Component {

  setForm = (formData) => {
    console.log(formData);
  }

  render() {
    return (
      <Login setForm={this.setForm}/>
    )
  }
}

export default LoginContainer;
