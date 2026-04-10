//  1) Even Number Counte In An Array
function countEvenNo(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;

}
let result1 = countEvenNo([2, 4, 5, 6, 8, 10]);
console.log(result1)

// 2) Sum Of Total Price
function sumOfPrice(price) {
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += price[i];
    }
    return sum
}
let result2 = sumOfPrice([10.56, 20, 36.8, 45.25, 105]);
console.log(result2);

// 3) Allow To Enter 3 Attempts To Correct Password
function findCorrectPassword(password) {
    let attempts = 0;

    while (attempts < 3) {
        let userInput = prompt('Enter Password');

        if (userInput === password) {
            console.log('Access Granted');
            return true;
        } else {
            attempts++;
            console.log(`Wrong password. Attempts left: ${3 - attempts}`);
        }
    }

    console.log('Access Denied (3 attempts failed)');
    return false;
}

let result3 = findCorrectPassword('ritesh123');
console.log(result3);

//4) Print Star Pattern

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


// 5) Reverse An Array Without Using Reverse Method
function revArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
let result5 = revArray([1, 2, 3, 4, 5]);
console.log(result5)

// 6) Find Maximum Number In An Array
function largeNo(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
let result6 = largeNo([12, 4, 8, 6, 1, 105, 32, 6, 6, 92]);;
console.log(result6);


//7) Shopping Cart With Discount
function calculateTotal(cart, discountLimit, discountRate) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let price = cart[i];

        if (price > discountLimit) {
            let discount = price * discountRate;
            price = price - discount;
        }

        total += price;
    }

    return total;
}

const cart = [500, 1200, 3000, 800, 1500];
const result7 = calculateTotal(cart, 1000, 0.10);

console.log("Final Total:", result7);


//8) SCalculate Student Average Mark
function calculateAverage(marks){
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

return  sum / marks.length;
}
let result8 = calculateAverage([85, 90, 78, 92, 88]);
console.log(result8)

//9) frequency Counter
function countWords(str){
    let count = {};
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(char !== " "){
            if(count[char]){
                count[char]++;
            }else{
                count[char] = 1;

            }
        }
    }
    return count;
}
let result9 = countWords('ritaesh jain');
console.log(result9)


//10) Order Billing Sysstem
function billingSystem(prices, quantities, gstRate) {

  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    let itemTotal = prices[i] * quantities[i];
    total += itemTotal;
  }

  let gst = total * gstRate;
  let finalBill = total + gst;

  console.log("Subtotal:", total);
  console.log("GST:", gst);
  console.log("Final Bill:", finalBill);
}

let result10 = billingSystem([100, 200, 150], [2, 1, 3], 0.18);
console.log(result10)