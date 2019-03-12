import React from 'react'
import Form from './Form'
import List from '../presentational/List'
import { connect } from 'react-redux'

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%', 
    margin: '3rem auto',
    padding: '.75rem',
    height: '75vh',
  }
}

const App = props => (
  <div style={styles.div}>
    <Form />
    <List todos={props.todos} />
  </div>
)

export default connect(
  state => ({ todos: state.todoReducer.todos }),
  null
)(App)
