//////////////////////////////////////////////////////////////////////////////////////////
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


//destructuring
const {firstName} = person
console.log(firstName)

//destructuring array

const myArray = ["One", "Two"]

const [one, two] = myArray

console.log(one, two)



//////////////////////////////////////////////////////////////////////////////////////////



myArray.filter( (number) => {
  console.log(number)
})




