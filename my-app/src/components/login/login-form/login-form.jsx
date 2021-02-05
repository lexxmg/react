
import './login-form.css';
import { Form, Field } from 'react-final-form';
import { Input } from '../../common/FormsControls/Input/Input';
import { required } from '../../../utils/validators';


const validate = (res) => {
  // console.log('__________validate_________');
  // console.log(res);
  // console.log('___________________________');
}

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.getUserLogin} validate={validate} render={({ handleSubmit }) => {
        return (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__input-wrapper">
              <Field
                className="login-form__input"
                name="email"
                type="text"
                component={Input}
                validate={required}
                placeholder="имя"
              />
            </div>

            <div className="login-form__input-wrapper">
              <Field
                className="login-form__input"
                name="pass"
                type="password"
                component={Input}
                validate={required}
                placeholder="пароль" />
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
