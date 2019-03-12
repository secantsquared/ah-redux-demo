import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/action'

const styles = {
  div: {
  },

  input: {
      fontWeight: 'bold',
      padding: '.5em',
      paddingLeft: '.75em',
      boxShadow: '2px 1px 2px rgba(25,25,25,0.5)',
      border: 'none',
  },
  button: {
      background: '#5cb85c',
      border: 'none',
      padding: '0.5em',
      width: '3.5rem',
      boxShadow: '2px 1px 2px rgba(25,25,25,0.6)',
      fontSize: '.75rem',
      marginLeft: '.10em'
  }
}


class Form extends Component {
  state = { text: '' }

  addTodo = e => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div style={styles.div}>
        <form onSubmit={this.addTodo}>
          <input type="text"
            placeholder="enter text"
            onChange={this.handleChange}
            value={this.state.text}
            style={styles.input}
            autoFocus
          />
          <button type="submit" style={styles.button}>➕</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(Form)
