import C from './constants'
import { auditParam } from './helpers'


export const addTodo = newTodo => 
    ({
        type: C.ADD_TODO,
        payload: auditParam(newTodo) ? newTodo : ''
        // A stricter check than just:  payload: typeof(newTodo === 'string') ? newTodo : ''
    })

export const setCurrentTodo = textInput => 
    ({
        type: C.SET_CURRENT_TODO,
        payload: auditParam(textInput) ? textInput : ''
    })

