// undefined, null, 0, '', NaN are falsy values

var user = null;
if(user){
    console.log("It is true");
}
var val = "2";
if(2==val){
    console.log("Both are equal");
}

var no = "2";
if(no === 2){
    console.log("Are Equal");
}
else{
    console.log("Not equal");
}