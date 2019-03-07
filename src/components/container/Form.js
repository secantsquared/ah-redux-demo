import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/action'

class Form extends Component {
  state = { text: '' }
  addTodo = e => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  changeHandler = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="enter text"
            onChange={this.changeHandler}
            value={this.state.text}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(Form)
