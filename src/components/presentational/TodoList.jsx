/**
 * Renders a form that users can submit after inputting Todo items as text
 */

 
import React from 'react'
import AddTodoForm from './UnaryForm'

const styles = {
    '.todoList': {
        marginLeft: '3em'
    },

    ul: {
        // fontWeight: 'bold',
        listStyle: 'square',
        textShadow: '1px 1px rgba(125,125,125,0.3)',
    }
}

export default function TodoList({addTodo, setCurrentTodo, currentTodoValue, todos}) {
    
    function handleSubmit(e) {
        e.preventDefault()
        addTodo(currentTodoValue)
        window.location.reload()
    }
    
    function handleChange({ target : { value } }) {
        setCurrentTodo(value)
    }

    return (
        <div className="todolist" style={styles['.todoList']}>
            <AddTodoForm className="todoList__form" handleSubmit={handleSubmit} handleChange={handleChange} submitValue={'➕'} />
            <ul className="todoList__list" style={styles.ul}>
                {todos.map((todo, i) => <li key={i}>{todo}</li>)}
            </ul>
        </div>
    )
}
