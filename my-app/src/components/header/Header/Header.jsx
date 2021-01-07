
import s from './style.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  console.log(props.autch);
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.logo}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEUvgYC6_i_LzHV9-qVIJRLhkGA7jnprtUw&usqp=CAU" alt="logo" className={s.img}/>
        </div>

        <div className={s.login_container}>
          {
            (props.isAuth && props.autch.authProfile.userId)?
            <div className={s.login_container_inner}>
              <div className={s.images}>
                <img src={props.autch.authProfile.photos.small} alt="моя-фотка" className={s.images__img}/>
              </div>

              <NavLink to={'/prof/' + props.autch.id}>
                <span className={s.user_name}>{props.autch.login}</span>
              </NavLink>
            </div>:

            <NavLink to="/login">
              <button className={s.login_btn}>Войти</button>
            </NavLink>
          }
        </div>
      </div>
    </header>
  )
}

export default Header;
