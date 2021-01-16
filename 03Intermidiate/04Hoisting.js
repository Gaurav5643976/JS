function tipper(a){
    var bill=a;
    console.log(bill+5);
}
tipper(5);
tipper("5");

function tipperModified(a){
    var bill=parseInt(a);
    console.log(bill+5);
}
tipperModified(5);
tipperModified("5");


//Functions declarations are scanned and made available
tipperBig("5");
function tipperBig(a){
    var bill=parseInt(a);
    console.log(bill+20);
}

//Variable declarations are scanned and undefined
// tipperSmall("5");
// var tipperSmall =function (a){
//     var bill=parseInt(a);
//     console.log(bill+2);
// }

console.log(myName);
var myName="Gaurav";

function sayName(){
    var myName="Mr. G";
    console.log(myName);
}
sayName();
console.log(myName);