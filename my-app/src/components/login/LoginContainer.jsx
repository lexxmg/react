
import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../../redux/auth-reducer';
import { getIsAuthState, getCaptcha } from '../../redux/auth-selectors';
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
      <Login getUserLogin={this.props.getUserLogin} captcha={this.props.captcha}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthState(state),
    captcha: getCaptcha(state)
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getUserLogin: (formData) => {
      //console.log(formData);
      const {email, pass, check, captcha} = formData;
      //console.log( getUserLogin(email, pass, check, captcha) )
      // console.log('p');
      // return { [FORM_ERROR]: 'submit error' };

      return dispatch( getUserLogin(email, pass, check, captcha) )
        .then((err) => ({[FORM_ERROR]: err}));
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(LoginContainer);
