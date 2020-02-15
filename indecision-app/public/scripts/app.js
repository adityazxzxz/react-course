'use strict';

console.log('app.js is running');

var templateOne = React.createElement(
    'p',
    null,
    'This is JSX from app.jss'
);
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Aditya Pratama zxz'
    ),
    React.createElement(
        'p',
        null,
        'Age:17'
    ),
    React.createElement(
        'p',
        null,
        'Location:Tangerang'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
