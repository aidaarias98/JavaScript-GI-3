// // //Easy 
let exercise = (exerciseName) => () => `Today's exercise: ${exerciseName}`;

const run = exercise("running");
const swim = exercise("swimming");

console.log(run());
console.log(swim());

//if i were to do it using no arrow functions
// function exercise (a){
//     return "Today's exercise: " + a;
// }

// function run(){
//     var run=exercise("running");
//     return run
// }

// function swim(){
//     var swim=exercise("swimming");
//     return swim
// }

// console.log(swim());
// console.log(run());