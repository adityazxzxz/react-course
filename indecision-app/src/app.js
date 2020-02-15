console.log('app.js is running');

var templateOne = <p>This is JSX from app.jss</p>;
var templateTwo = (
    <div>
        <h1>Aditya Pratama zxz</h1>
        <p>Age:17</p>
        <p>Location:Tangerang</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);