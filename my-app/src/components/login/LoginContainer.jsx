
import React from 'react';
import { connect } from 'react-redux'
import { getUserLogin } from '../../redux/auth-reducer'
import Login from './Login/login'

class LoginContainer extends React.Component {

  setForm = (formData) => {
    console.log(formData);
    //email: "ewe", pass: "tt", check: true
    const {email, pass, check, captcha} = formData;
    this.props.getUserLogin(email, pass, check, captcha);
  }

  render() {
    return (
      <Login setForm={this.setForm} />
    )
  }
}

export default connect(null, {getUserLogin})(LoginContainer);
