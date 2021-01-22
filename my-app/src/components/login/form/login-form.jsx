
import './login-form.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form className={`login-form ${props.classPosition}`}>
      <div className="login-form__input-wrapper">
        <Field className="login-form__input" name="email" component="input" type="text" placeholder="email"/>
      </div>

      <div className="login-form__input-wrapper">
        <Field className="login-form__input" name="pass" component="input" type="text" placeholder="pass"/>
      </div>

      <div className="login-form__input-wrapper">
        <Field className="login-form__input" name="loginCeck" component="input" id="check" type="checkbox" />
        <label htmlFor="check" className="login-form__label">Запомнить?</label>
      </div>

      <button className="login-form__submit">Логин</button>
    </form>
  )
}

export default reduxForm({ form: 'formLogin' })(LoginForm);
