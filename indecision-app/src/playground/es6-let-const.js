var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameCost',nameConst);

//blocking scope

var fullName = 'jen mead';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
}
console.log('firstname',firstName);