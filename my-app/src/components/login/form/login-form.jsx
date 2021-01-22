
import './login-form.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form className={`login-form ${props.classPosition}`}>
      <div className="login-form__input-wrapper">
        <input className="login-form__input" name="email" type="text" placeholder="email"/>
      </div>

      <div className="login-form__input-wrapper">
        <input className="login-form__input" name="pass" type="text" placeholder="pass"/>
      </div>

      <div className="login-form__input-wrapper">
        <input className="login-form__input" name="loginCeck" id="check"type="checkbox" />
        <label htmlFor="check" className="login-form__label">Запомнить?</label>
      </div>

      <button className="login-form__submit">Логин</button>
    </form>
  )
}

export default reduxForm({ form: 'formLogin' })(LoginForm);
