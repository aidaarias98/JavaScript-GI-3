// //hard
let privateInfo = (function() {

    let snn=function(){
        console.log("764-90-987")
    };

    let pii = {
        firstName: "aida",
        lastName: "arias",
    };
return {
    pii:pii,
};
})();
console.log(privateInfo.pii.firstName);
console.log(privateInfo.pii.lastName);



// // function privateInfo(){
// // const pii = {
// // name:"Aida",
// // ssn: "765-86-9089"
// // };
// // function nameOnly(){
// //    return pii.name;
// // }
// // return nameOnly();
// // }
// // console.log(privateInfo());