'use strict';

console.log('app.js is running');

var templateOne = React.createElement(
    'p',
    null,
    'This is JSX from app.jss'
);

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'here your options' : 'no options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location:',
            location
        );
    }
}

var user = {
    name: 'Aditya Pratamax',
    age: 18,
    location: 'Tangerang'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
