import uuidv4 from 'uuid'
import { ADD_TODO } from '../actions/action'

const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (!action.payload) {
        return state
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            id: uuidv4(),
            complete: false
          }
        ]
      }

    default:
      return state
  }
}

export default todoReducer
