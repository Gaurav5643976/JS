var testArray=[2,4,6,3,1,5,9,8,0,7];
console.log(testArray.fill("g",3,6));
console.log(testArray.fill("g",3));
console.log(testArray.fill("g"));


const myNumber=[23,24,55,65,34,65,76,78,98];
const result=myNumber.filter((num)=>num!=55);
console.log(result);
const res=myNumber.filter((num)=>num<55);
console.log(res);


var users=["Gaurav","Aakash","Atul","Gaurang","Himanshu","Abhishek","Suryansh","Murli"];
console.log(users.slice(1,5));
console.log(users.slice(3));
users.splice(1,3,"hi","bye");
console.log(users);