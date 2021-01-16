// using normal fuction
function isEven(n){
    // if (n%2==0) {
    //     return true;
    // }
    // return false;
    return n%2===0;
}  
console.log(isEven(4));

//using varible
var isEVEN=function (n){
    // if (n%2==0) {
    //     return true;
    // }
    // return false;
    return n%2===0;
}
console.log(isEVEN(4));

//using arrow
var isEVen=(n)=>{
    // if (n%2==0) {
    //     return true;
    // }
    // return false;
    return n%2===0;
}
console.log(isEVen(4));


var res=[2,4,6,8].every(isEVen);
console.log(res);

res=[2,3,6,8].every(isEVen);
console.log(res);

var result=[2,4,6,8].every((e)=>{
    return e%2===0;
});
console.log(result);

result=[2,3,6,8].every((e)=>{
    return e%2===0;
});
console.log(result);

var ans=[2,4,6,8].every((e)=> e%2===0);
console.log(ans);

ans=[2,3,6,8].every((e)=> e%2===0);
console.log(ans);