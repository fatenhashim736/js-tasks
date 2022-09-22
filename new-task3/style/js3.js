//The First way 
let student1 = {
    "first Name": "Ali",
    "last Name": "Hassan",
    age: 25,
    stage: "Fourth"
};
console.log(Object.values(student1));
//-----------------------------


//The Second Way
let student2 = {};
student2.firstName = "Yousif";
student2.lastName = "Senan";
student2.age = 20;
student2.stage = "Third";

let txt = "";
for (let x in student2) {
    txt += student2[x] + " ";
}

console.log(txt);
//-----------------------------



//The Third Way
const student3 = new Object();
student3.firstName = "Maha";
student3.lastName = "Husham";
student3.age = 19;
student3.stage = "Second";

console.log(("Name:" + (student3.firstName)) + (" " + student3.lastName) + (", Age:" + (student3.age)) + (", Stage:" + (student3.stage)));