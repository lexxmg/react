
import './style.css';

function TodoList() {
  return (
    <ul className="list">
      <li className="list__item">задача-1</li>
      <li className="list__item list__item--active">задача-2</li>
      <li className="list__item">задача-3</li>
      <li className="list__item">задача-4</li>
    </ul>
  )
}

export default TodoList;
