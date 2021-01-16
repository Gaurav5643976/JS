var countries=["India","Pak","Srilanka","Nepal"];

var states =new Array("UP","Delhi","MP","AP","UK");

console.log(countries);
console.log(states);
console.log(states.length);
states[0]="Goa";
console.log(states);



var user=["Gaurav","mr.gaurav@gmail.com",3,true];
console.log(user);
user.pop();//take out one value from end
console.log(user);
user.unshift("New Value");
console.log(user);
user.shift();
console.log(user);
console.log(user.indexOf(3));
console.log(user.indexOf("x"));
console.log(Array.from("Gaurav"));



