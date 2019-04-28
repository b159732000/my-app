import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import './index.css';
import { Main } from './components/Main';
import * as serviceWorker from './serviceWorker';

// redux
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'

// 定義Redux Store
// const store = createStore(rootReducer)

ReactDOM.render(
    
    /* Redux版本 */
    /* <Provider store={store}>
    <Main />
    </Provider>, */

    /* 無Redux版本 */
    <Main />,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
