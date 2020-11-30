import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {name: 'задача-1', checked: true},
        {name: 'задача-2', checked: true},
        {name: 'задача-3', checked: false}
      ]
    }
  }

  render() {
    return (
      <ol>
        {
          this.state.todos.map((obj, i) => {
            const className = obj.checked ? 'checked' : '';

            return <li key={i} className={className}>{obj.name}</li>
          })
        }
      </ol>
    );
  }
}

function HelloWorld() {
  return <h1>Hello React</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
