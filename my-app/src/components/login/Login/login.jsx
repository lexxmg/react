
import './login.css';
import LoginForm from '../login-form/login-form';

const Login = (props) => {
  return (
    <div className="login">
      <h2 className="login__title">Логин</h2>

      <LoginForm />
    </div>
  )
}

export default Login;
