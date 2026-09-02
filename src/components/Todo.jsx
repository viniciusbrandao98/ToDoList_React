import React from 'react'

const Todo = ({lista}) => {
    return (
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
    )
}

export default Todo
