
//Primitive types -> Store by value
//Number, String, Boolean, Undefined, Null, 

//Non primitive -> Store by reference
//Object, Arrays, Date

let a = 10;
console.log(typeof a);

a = 10.10;
console.log(typeof a);

a = 'CrossTraining';
console.log(typeof a);

a = false;
console.log(typeof a);

a = null;
console.log(typeof a);

a = undefined;
console.log(typeof a);


//Non primitive

let person = {
  firstName: 'Leo',
  lastName: 'Madrigal',
  address: {
    street: 'Street Name',
    city: 'Atlanta'
  },
  getFullNameWithArrow: () => {
    return person.firstName + ' ' + person.lastName;
  },
  getFullNameNormalFunction: function (){
    return this.firstName + ' ' + this.lastName;
  },
  qualifications: ['Smart', 'Bachelors']
}

console.log(person)
console.log(person.qualifications[0])
console.log(person.getFullNameWithArrow())
console.log(person.getFullNameNormalFunction())

let person2 = person;
person2.firstName = 'Leonardo David';

console.log(person.firstName)

const cars = ['BMW', 'Mercedes']
cars.push('Toyota')

console.log(cars)