import s from './top.module.css';

const Top = () => {
  return (
    <div className={`main__top ${s.top}`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VIao5Ctz-GHVJSqedPhPDk1lz6DiHh7WTg&usqp=CAU" alt="подсолнухи" className={s.img}/>
    </div>
  );
}

export default Top;
