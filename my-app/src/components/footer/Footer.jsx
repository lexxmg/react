import s from './footer.modele.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <small className="text">{props.name}</small>
    </footer>
  )
}

export default Footer;
