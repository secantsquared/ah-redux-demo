/**
 * Top level Parent Component (aside from Provider)
 * The rendered JSX can be found in ../presentational/App.js
 */


import TodoList from '../presentational/TodoList.jsx';
import { connect } from 'react-redux'
import * as actions from "../../actionCreators"
// import { withRouter } from 'react-router'


const mapStateToProps = state => 
  ({
    todos: state.todos,
    currentTodoValue: state.currentTodoValue
  })

const mapDispatchToProps = dispatch => 
    ({
      addTodo(newTodo) {
        // e.preventDefault() // prevent the page from refreshing
        dispatch(actions.addTodo(newTodo))
      },

      setCurrentTodo(textInput) {
        dispatch(actions.setCurrentTodo(textInput))
      }
    })

const Container = connect(mapStateToProps, mapDispatchToProps)(TodoList)


export default Container

// When we incorporate React Router...
// export default withRouter(Container)