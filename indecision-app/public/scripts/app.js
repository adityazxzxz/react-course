'use strict';

console.log('app.js is running');

var template = React.createElement(
  'p',
  null,
  'This is JSX from app.jss'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
