import React from 'react'

const styles = {
  p: {
    textShadow: '1px 1px rgba(125,125,125,0.3)'
  }
}

const List = props => {
  return props.todos.map(item => (
    <p key={item.id} style={styles.p}>{item.text}</p>
  ))
}

export default List
