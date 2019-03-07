import React from 'react'

const List = props => {
  return props.todos.map(item => (
    <p key={item.id}>{item.text}</p>
  ))
}

export default List
