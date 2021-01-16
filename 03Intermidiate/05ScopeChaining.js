var myName="Gaurav";
console.log("Line number 2",myName);


function sayName(){
    // myName="Mr G";
    console.log("Line number 7",myName);

    function againSayName(){
        // myName="Mr Gau";
        console.log("Line number 10", myName);
    }
    againSayName();
}
sayName();