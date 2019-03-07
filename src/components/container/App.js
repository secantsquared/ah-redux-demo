import React from 'react'
import Form from './Form'
import List from '../presentational/List'
import { connect } from 'react-redux'

const App = props => (
  <>
    <Form />
    <List todos={props.todos} />
  </>
)

export default connect(
  state => ({ todos: state.todoReducer.todos }),
  null
)(App)
