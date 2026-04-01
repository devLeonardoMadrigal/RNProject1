

console.log("Start") //Syncronous code


new Promise((resolve,reject) => {
  console.log("Inside Promise")
})

async function myFunction() {
  console.log("Inside async function")
}

myFunction()


console.log("START")

//create a promise
const promise = new Promise ((resolve, reject) => {
  resolve("Hi I am a promise")
})

printMessage((message) => {
  console.log(message)
})

console.log("END")


//Promises have more priorities than asyncronous callbacks