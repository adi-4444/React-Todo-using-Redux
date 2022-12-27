
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoAction, RemoveTodoAction } from './redux/actions/TodoActions';

function App() {
  const [todo, setTodo] = useState('')

  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo

  const inputChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo !== '') {
      dispatch(AddTodoAction(todo))
    }
    setTodo('')
  }
  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))

  }
  return (
    <div className='App'>
      <h2>Todo App using Redux</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' className='input' placeholder='Enter a Todo' value={todo} onChange={inputChange} autoFocus />
        <input type='submit' className='submit' Add />
      </form>
      <div className='todos'>
        {
          todos && todos.map((t) => (
            <div className='todo' key={t.id}>
              <div className='todo-item'>{t.todo}</div>
              <div className='todo-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className='todo-delete' onClick={() => removeHandler(t)}><path fill="red" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
