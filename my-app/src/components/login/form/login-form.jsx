
import './login-form.css';

const LoginForm = (props) => {
  return (
    <form className="login-form">
      <div className="login-form__input-wrapper">
        <input className="login-form__input" type="text" placeholder="email"/>
      </div>

      <div className="login-form__input-wrapper">
        <input className="login-form__input" type="text" />
      </div>

      <div className="login-form__input-wrapper">
        <input className="login-form__input" type="checkbox" />
      </div>

      <button className="login-form__submit">Логин</button>
    </form>
  )
}

export default LoginForm;
