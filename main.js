//task44
// sandwiches: write a function that accepts a array of itiems a person wants on a sandwich. the function
// should have one perameter that collects as many items as the function call provides , and it should print
// a summary of the sandwich that is being ordered. call the function three , using a different  number
// of argument each time.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log(' - ${items}');
    }
}
console.log("enjoy your sandwich mehak alamgir");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
