
import './preloader.css';
//import preload from '../../../assets/images/DIqU.gif';
import preloadBall from '../../../assets/images/preloader.gif';

const Preload = (props) => {
  return (
    <div className="preloader">
      <div className="preloader__inner">
        <div className="preloader__image">
          <img src={preloadBall} alt="preload" className="preloader__img"/>
        </div>

        <span className="preloader__text">Загрузка...</span>
      </div>
    </div>
  )
}

export default Preload;
