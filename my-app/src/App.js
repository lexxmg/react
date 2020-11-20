//import logo from './logo.svg';
//import './App.css';
import './css/main.css';
import './css/list.css';
import TodoList from './Todo/TodoList';

const title = 'Загголовок из переменной';

function App() {
  return (
    <div className="wrapper fixed-container">
      <div className="main">
        <h1 className="main__title">{title}</h1>
      </div>

      <TodoList />
    </div>
  );
}

export default App;
