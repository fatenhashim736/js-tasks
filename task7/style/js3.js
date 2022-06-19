let x = "FATEN";

console.log(x.toLowerCase()[0]); //(1)
console.log(x.toLowerCase().slice(0, 1)); //(2)
console.log(x.toLowerCase().substring(0, 1)) //(3)
console.log(x.toLowerCase().substr(0, 1)); //(4)
console.log(x.toLowerCase().charAt(0)) //(5)
console.log(x.toLowerCase()[x.length - 5]); //(6)