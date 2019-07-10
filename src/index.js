import React from 'react';
import ReactDOM from 'react-dom';
import MyInfo from './components/MyInfo';
import AnotherInfo from './components/AnotherInfo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyInfo />, document.getElementById('main'));
ReactDOM.render(<AnotherInfo />, document.getElementById('secondary'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
