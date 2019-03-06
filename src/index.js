/**
 * Main index file for the app
 * Connects the whole application to the redux store and renders it
 */

 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/presentational/App'
import _initialState from './initialState.json'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import storeFactory from './store'


const initialState = JSON.parse(localStorage.getItem('todo-list\'s-redux-store')) || _initialState
const store = storeFactory(initialState)

function saveState() {
	const state = JSON.stringify(store.getState())
	localStorage.setItem('todo-list\'s-redux-store', state)
}

store.subscribe(saveState)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)

