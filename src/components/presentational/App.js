/** 
 * Top level Presentational Component
 * Renders a TodoList
 */

 
import React from 'react'
import TodoList from '../containers/TodoList'


export default function App({children}) {
    return <TodoList />
}

