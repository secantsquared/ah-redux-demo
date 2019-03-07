/** 
 * Top level Presentational Component
 * Renders a TodoList
 */

 
import React from 'react'
import TodoList from '../containers/TodoList'


const styles = {
    width: '90vw', 
    margin: '2rem auto',
    padding: '.75rem'
}

export default function App() {
    return (
        <main style={styles}>
            <TodoList />
        </main>
    )
}

