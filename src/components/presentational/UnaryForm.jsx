/**
 * Renders a form with a single text input and a submit button
 */


import React from 'react'

const styles = {
    input: {
        fontWeight: 'bold',
        padding: '.5em',
        paddingLeft: '.75em',
        boxShadow: '2px 1px 2px rgba(25,25,25,0.5)',
        border: 'none'
    },
    button: {
        background: '#5cb85c',
        border: 'none',
        padding: '0.5em',
        width: '3.5em',
        boxShadow: '2px 1px 2px rgba(25,25,25,0.3)'
    }
}


export default function UnaryForm({ handleChange, handleSubmit, submitValue='submit' }) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   placeholder="add a todo item" 
                   onChange={handleChange}
                   style={styles.input}
                   autoFocus
            />
            <button type="submit" style={styles.button}>{submitValue}</button>
        </form>
    )
}