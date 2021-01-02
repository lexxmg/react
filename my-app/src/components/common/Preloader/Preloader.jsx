
import './preloader.css';
import preload from '../../../assets/images/preloader.svg';

const Preload = (props) => {
  return (
    <div className="preloader">
      <div className="preloader__image">
        <img src={preload} alt="preload" className="preloader__img"/>
      </div>
    </div>
  )
}

export default Preload;
