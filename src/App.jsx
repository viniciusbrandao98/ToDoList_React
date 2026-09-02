import { useState } from 'react'
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sitema",
      category: "Trabalho",
      isCompleted: false,

    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,

    },
    {
      id: 3,
      text: "Estudar React",
      category: "Trabalho",
      isCompleted: false,

    },
  ])
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((lista) => (
          <Todo lista={lista} />
        ))}
      </div>
      <TodoForm />
    </div>

  )
}

export default App
