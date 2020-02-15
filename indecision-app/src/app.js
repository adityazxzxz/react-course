console.log('app.js is running');

var templateOne = <p>This is JSX from app.jss</p>;

var user = {
    name:'Aditya Pratamax',
    age:17,
    location:'Tangerang'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age:{user.age}</p>
        <p>Location:{user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);