
import './paginator.css';

import { useState } from 'react';

const Paginator = (props) => {
  const [btnPrev, setBtnPrev] = useState(false);
  const [btnNext, setBtnNext] = useState(true);

  let pages = [];

  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div className="paginator">
      { (props.currentPage > 1)
        ? <button className="paginator__btn"
                  onClick={() => props.getUsers(props.currentPage - 1)}
          >назад
          </button>
        : ''
      }

      <ul className="paginator paginator-list">
        {
          pages.map(page => {
            return (
              <li
                className={
                  (props.currentPage === page)
                  ? "paginator-list__item paginator-list__item--active"
                  : "paginator-list__item"
                }
                key={page}
                onClick={() => props.getUsers(page)}
              >
              {page}
              </li>
            )
          })
        }
      </ul>

      {
        btnNext && <button className="paginator__btn"
                    onClick={() => props.getUsers(props.currentPage + 1)}
        >вперёд</button>
      }

    </div>
  )
}

export default Paginator;
