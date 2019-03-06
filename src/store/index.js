import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import _initialState from '../initialState.json'
import thunk from 'redux-thunk'


// custom middleware for the redux store; logs the state to the console before and after each state mutation
const consoleMessages = store => next => action => {
    var result
    const { 
        todos: todosBeforeUpdate, 
        currentTodoValue : currentTodoValueBeforeUpdate
    } = store.getState()
    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('Before state mutation: \n',
        `todos: ${JSON.stringify(todosBeforeUpdate, null, 4)} \n`,
        `currentTodoValue: ${JSON.stringify(currentTodoValueBeforeUpdate, null, 4)}`
    )

    // code above this line takes place before action is dispatched
    result = next(action)
    // code below this line takes place after action is dispatched

    const { 
        todos: todosAfterUpdate, 
        currentTodoValue: currentTodoValueAfterUpdate
    } = store.getState()

    console.log('After state mutation: \n',
        `todos: ${JSON.stringify(todosAfterUpdate, null, 4)} \n`,
        `currentTodoValue: ${JSON.stringify(currentTodoValueAfterUpdate, null, 4)}`
    )
    console.groupEnd()

    return result
}

// export a store factory that produces stores with middleware attached to it
export default (initialState={_initialState}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(rootReducer, initialState)
}