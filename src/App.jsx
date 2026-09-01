import { useState } from 'react'
import "./App.css";

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
          <div className="todo">
            <div className="content">
              <p>{lista.text}</p>
              <p classname="category">({lista.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default App
