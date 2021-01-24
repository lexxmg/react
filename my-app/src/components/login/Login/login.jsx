
import './login.css';
import LoginForm from '../login-form/login-form';

const Login = (props) => {
  return (
    <div className="login">
      <h2 className="login__title">Логин</h2>

      <LoginForm getUserLogin={props.getUserLogin}/>
    </div>
  )
}

export default Login;
