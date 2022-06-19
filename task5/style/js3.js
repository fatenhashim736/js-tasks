let a = 100000;

console.log(a); //(1)
console.log(10 ** 5); //(2)
console.log(a.toString()); //(3)
console.log((100000.223).toFixed()); //(4)
console.log(a.valueOf()); //(5)
console.log(parseInt("100000")); //(6)
console.log("100000"); //(7)
console.log(parseFloat("100000 numbers")); //(8)
console.log(Number("100000")); //(9)
let text = a.toString();
console.log(text); //(10)
console.log(a.toPrecision()); //(11)
console.log(a.toLocaleString()); //(12)