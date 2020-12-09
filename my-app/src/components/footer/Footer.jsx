import s from './footer.module.css';

const Footer = (props) => {
  return (
    <footer className={s.footer}>
      <small className={s.text}>{props.name}</small>
    </footer>
  )
}

export default Footer;
