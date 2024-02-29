//task44
// sandwiches: write a function that accepts a array of itiems a person wants on a sandwich. the function
// should have one perameter that collects as many items as the function call provides , and it should print
// a summary of the sandwich that is being ordered. call the function three , using a different  number
// of argument each time.


function sandwich (...items:string[]):void {
  console.log("sandwich order:")

  for (let i = 0; i < items.length; i++){
    console.log(' - ${items}')
  }
}
 console.log("enjoy your sandwich mehak alamgir")

sandwich('capsicum' ,'tomato','chicken')
sandwich('beef','cheese')
sandwich('garlic chicken','mayo sauce')