import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import './index.css';
import { Main } from './components/Main';
import * as serviceWorker from './serviceWorker';

// // redux
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers/index.jsx'


// // 定義Redux Store
// const store = createStore(rootReducer)
// console.log(store);
// store.dispatch({ type: "INCREMENT" })
// console.log(store);
// store.dispatch({ type: "DECREMENT" })
// console.log(store);
// store.dispatch({ type: "RESET" })
// console.log(store);



ReactDOM.render(
    /* Redux版本 */
    <Main />,

    /* 無Redux版本 */
    // <Main />,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
