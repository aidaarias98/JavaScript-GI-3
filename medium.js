// //medium
let cutPizzaSlices = (a) => (b) => a/b;

let sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));

// // //medium if i were to not use arrow functions
// // function cutPizzaSlices (a){
// //     return a;
// // }

// // function sharePizza(b){
// //     var amountSlices = cutPizzaSlices(8);
// //     return `Each person gets ${amountSlices/b} slices of pizza`
// // }

// // console.log(sharePizza(2));
// // console.log(sharePizza(3));
