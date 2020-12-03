import s from './style.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEUvgYC6_i_LzHV9-qVIJRLhkGA7jnprtUw&usqp=CAU" alt="logo" className={s.img}/>
    </header>
  )
}

export default Header;
