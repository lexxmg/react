
import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../../redux/auth-reducer';
import Login from './Login/login';
import { Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';

class LoginContainer extends React.Component {

  // setForm = (formData) => {
  //   console.log(formData);
  //   //email: "ewe", pass: "tt", check: true
  //   const {email, pass, check, captcha} = formData;
  //   this.props.getUserLogin(email, pass, check, captcha);
  // }

  render() {
    if (this.props.isAuth) {
      return <Redirect to="/prof" />
    }

    return (
      <Login getUserLogin={this.props.getUserLogin} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.autch.isAuth
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getUserLogin: async (formData) => {
      console.log(formData);
      const {email, pass, check, captcha} = formData;
      const p = getUserLogin(email, pass, check, captcha)//.then(() => console.log('err'))
      await p(dispatch)//.then(() => console.log('err'))
      return { [FORM_ERROR]: 'submit error' };
      console.log(p);
      //dispatch( getUserLogin(email, pass, check, captcha) );
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(LoginContainer);
