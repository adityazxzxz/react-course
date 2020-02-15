console.log('app.js is running');

var templateOne = <p>This is JSX from app.jss</p>;

var app = {
    title:'Indecision app',
    subtitle:'Put your life in the hands of a computer',
    options:['one','two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'here your options' : 'no options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

function getLocation(location){
    if(location){
        return <p>Location:{location}</p>
    }
}

var user = {
    name:'Aditya Pratamax',
    age:18,
    location:'Tangerang'
};

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);