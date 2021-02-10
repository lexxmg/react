
import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../../redux/auth-reducer';
import Login from './Login/login';
import { Redirect } from 'react-router-dom';
//import { FORM_ERROR } from 'final-form';

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
      <Login getUserLogin={this.props.getUserLogin} isError={this.props.isError}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.autch.isAuth,
    isError: state.autch.errors
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getUserLogin: (formData) => {
      console.log(formData);
      const {email, pass, check, captcha} = formData;
      //console.log( getUserLogin(email, pass, check, captcha) )
      // console.log('p');
      // return { [FORM_ERROR]: 'submit error' };

      dispatch( getUserLogin(email, pass, check, captcha) );
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(LoginContainer);
