import React from 'react'

const Todo = ({lista, removeTodo}) => {
    return (
        <div className="todo-list">
            <div className="content">
                <p>{lista.text}</p>
                <p className="category">({lista.category})</p>
            </div>
            <div className='btnCR'>
                <button className='complete'>Completar</button>
                <button className='remove' onClick={() => removeTodo(lista.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo
