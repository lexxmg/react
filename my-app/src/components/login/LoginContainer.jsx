
import React from 'react';
import { connect } from 'react-redux'
import { getUserLogin } from '../../redux/auth-reducer'
import Login from './Login/login'

class LoginContainer extends React.Component {

  // setForm = (formData) => {
  //   console.log(formData);
  //   //email: "ewe", pass: "tt", check: true
  //   const {email, pass, check, captcha} = formData;
  //   this.props.getUserLogin(email, pass, check, captcha);
  // }

  render() {
    return (
      <Login getUserLogin={this.props.getUserLogin} />
    )
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getUserLogin: (formData) => {
      const {email, pass, check, captcha} = formData;
      dispatch( getUserLogin(email, pass, check, captcha) );
    }
  }
}

export default connect(null, mapDispathToProps)(LoginContainer);
