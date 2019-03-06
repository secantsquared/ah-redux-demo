/**
 * Renders a form that users can submit after inputting Todo items as text
 */

 
import React from 'react'


export default function TodoList({addTodo, setCurrentTodo, currentTodoValue}) {
    
    function handleSubmit(e) {
        e.preventDefault()
        addTodo(currentTodoValue)
    }
    
    function handleChange({ target : { value } }) {
        setCurrentTodo(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   placeholder="add a todo item" 
                   onChange={handleChange}
            />
            <input type="submit" value="submit" />
        </form>
    )
}
