import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/btn.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {name: 'задача-1', checked: true},
        {name: 'задача-2', checked: true},
        {name: 'задача-3', checked: false},
        {name: this.props.name, checked: false}
      ],
      date: new Date(),
      value: ''
    }

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('компонент отрисован');

    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    //console.log(new Date());
    const stat = this.state.todos;
    stat[3] = {name: String( new Date() ), checked: false};
    //stat.push('новая задача');
    console.log('data' + '-' + stat[3]);

    this.setState({
      date: new Date,
      todos: stat
    });
  }

  todo(name) {
    const stat = this.state.todos;
    stat.push({name: name, checked: false});

    this.setState({todos: stat});
  }

  todoDelete(index) {
    const stat = this.state.todos;
    console.log('delete');

    stat.splice(index, 1);

    this.setState({
      todos: stat
    })
  }

  handleChange(event) {
    //console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="fixed-container">
        <h1 className="title">{String( this.state.value )}</h1>

        <ol>
          {
            this.state.todos.map((obj, i) => {
              const className = obj.checked ? 'checked' : '';

              return (
                <li key={i} className={className}
                  onClick={() => this.toggle(i)}
                  onDoubleClick={() => this.todoDelete(i)}
                >
                  {obj.name}
                </li>
              );
            })
          }
        </ol>

        <form action="#" className="form"
          onSubmit={
            event => {
              event.preventDefault();
              //console.log(event.target.text.value);
              this.todo(this.state.value);
              this.state.value = '';
            }
          }>
          <input type="text"
            className="form__input"
            name="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <button className="form__btn btn">Создать</button>
        </form>

        <button className="btn" onClick={() => {this.todo('новая задача')}}>
          Добавить {String( this.state.date )}
        </button>
      </div>
    );
  }

  toggle(index) {
    const stat = this.state.todos;

    this.state.todos[index].checked =  !this.state.todos[index].checked;

    this.setState({todos: stat});
  }
}

function HelloWorld() {
  return <h1>Hello React</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <TodoApp name={'test'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
