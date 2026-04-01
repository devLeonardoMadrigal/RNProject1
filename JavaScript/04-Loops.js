
const items = ["A", 2, 3, false, true, "SADFASD"]

for(let i = 0; i < items.length; i++){
  console.log(items[i])
}
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


for(let property in person){
  console.log(property)
}

//////////////////////////////////////////////////////////////////////////////////////////