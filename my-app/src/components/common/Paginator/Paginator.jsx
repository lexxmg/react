
import './paginator.css';

import { useState } from 'react';

const Paginator = ({usersAllCount, currentPage, userCount, getUsersThunk}) => {
  let pages = [];

  //const pageSize = 5;

  const portionSize = userCount;

  const portionCount = Math.ceil(usersAllCount / portionSize);
  const [portionNimber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNimber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNimber * portionSize;

  for (let i = 1; i <= portionCount; i++) {
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
                    (currentPage === page)
                    ? "paginator-list__item paginator-list__item--active"
                    : "paginator-list__item"
                  }
                  key={page}
                  onClick={() => getUsersThunk(page, portionSize)}
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
