import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk"
import RootReducer from "./Redux/Reducers/RootReducer"
import './componentAnimation.css'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const store = createStore(RootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>


    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
