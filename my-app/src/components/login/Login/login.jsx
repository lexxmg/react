
import './login.css';
import LoginForm from '../form/login-form';

const Login = (props) => {
  return (
    <div className="login">
      <h2 className="login__title">Логин</h2>

      <div className="login-form__wrapper">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;
