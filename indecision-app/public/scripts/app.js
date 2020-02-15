'use strict';

console.log('app.js is running');

var templateOne = React.createElement(
    'p',
    null,
    'This is JSX from app.jss'
);

var user = {
    name: 'Aditya Pratamax',
    age: 17,
    location: 'Tangerang'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location:',
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
