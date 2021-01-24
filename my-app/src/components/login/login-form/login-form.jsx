
import './login-form.css';
import { Form, Field } from 'react-final-form';


const validate = (res) => {
  console.log('__________validate_________');
  console.log(res);
  console.log('___________________________');
}

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.setForm} validate={validate} render={({ handleSubmit }) => {
        return (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__input-wrapper">
              <Field className="login-form__input" name="email" type="text" component="input" placeholder="имя" />
            </div>

            <div className="login-form__input-wrapper">
              <Field className="login-form__input" name="pass" type="text" component="input" placeholder="пароль" />
            </div>

            <div className="login-form__input-wrapper">
              <Field className="login-form__input" id="check" name="check" type="checkbox" component="input" />
              <label htmlFor="check" className="login-form__label">Запомнить?</label>
            </div>

            <button type="submit">Submit</button>
          </form>
        )
      }}
    />
  )
}

export default LoginForm;
