
import './login-form.css';

const LoginForm = (props) => {
  return (
    <form className="login-form">
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

export default LoginForm;
