
import './paginator.css';

import { useState } from 'react';

const Paginator = (props) => {
  let pages = [];

  const pageSize = 5;

  const pagesCount = Math.ceil(props.usersAllCount / pageSize);

  const portionSize = 5;
  const portionCount = Math.ceil(props.usersAllCount / portionSize);
  const [portionNimber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNimber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNimber * portionSize;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="paginator">
      { (portionNimber > 1)
        ? <button className="paginator__btn"
                  onClick={() => { setPortionNumber(portionNimber - 1)}}
          >назад
          </button>
        : ''
      }

      <ul className="paginator paginator-list">
        {
          pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(page => {
              return (
                <li
                  className={
                    (props.currentPage === page)
                    ? "paginator-list__item paginator-list__item--active"
                    : "paginator-list__item"
                  }
                  key={page}
                  onClick={() => props.getUsersThunk(page, pageSize)}
                >
                {page}
                </li>
              )
            })
        }
      </ul>

      {
        portionCount > portionNimber &&
        <button className="paginator__btn"
                onClick={() => { setPortionNumber(portionNimber + 1)}}
        >вперёд
        </button>
      }

    </div>
  )
}

export default Paginator;
