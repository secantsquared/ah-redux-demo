import C from '../constants'
import _initialState from '../initialState.json'
import { combineReducers } from 'redux';


export const addTodo = (state=_initialState.todos, action) => 
    (action.type === C.ADD_TODO) ? [...state, action.payload] : state

export const setCurrentTodo = (state=_initialState.currentTodoValue, action) => 
    (action.type === C.SET_CURRENT_TODO) ? action.payload : state

// combine all reducers into one root reducer
export default combineReducers({
    todos: addTodo,
    currentTodoValue: setCurrentTodo
})
