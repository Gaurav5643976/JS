var num1 = 7;
var num2 = 6;
console.log(num1+num2);

var answer = num1>num2;
console.log(answer);

//discount percentage D=((L-S)/L)*100
var sellingPrice = 199;
var listingPrice = 799;
var discountPercentage = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount Percentage is:" + discountPercentage);
var displayDiscountPercentage = Math.round(discountPercentage);
console.log(displayDiscountPercentage + "% Off");

var result = listingPrice > sellingPrice;
console.log(typeof result);