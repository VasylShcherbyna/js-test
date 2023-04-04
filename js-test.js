let test = "Hello" + " word";
const a = "apple";
console.log(a);
console.log(test);

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = `${pricePerDroid * orderedQuantity + deliveryFee}`;
console.log(totalPrice);

function test2(abc) {
    console.log(`Total price ${abc}`);
}
test2(95);

function test3(oldPrice, newPrice) {
    return oldPrice * newPrice + 5;
}
let result = test3(2, 2);
console.log(result);
result = test3(5, 5);
console.log(result);

function secondTest(oldP,newP,message) {
    return `${message} ${oldP - newP + 5}`;
}
let finish = secondTest(8, 2, "Total price");
console.log(finish);
finish = secondTest(9, 1);
console.log(finish);

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line 
const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price`;

  // Change code above this line
  return message;
}
const m = makeOrderMessage(2, 100, 50);
console.log(m);
console.log(typeof m);
console.log(typeof makeOrderMessage);
const bool = true;
console.log(typeof bool);
console.log(typeof finish);
const gt = {};
console.log(typeof gt);


function valid(password) {
    const lastPasssword = 555;
    const try1 = password === lastPasssword;
    return try1;
}
console.log(valid(555));

let cena;

const coffe = 25;

if (coffe === 2) {
    cena = "I like cofee";
} else {
    cena = 100;
}
console.log(cena);

function testIf(age) {
    let message;
    if (age === 25) {
        message = "You are an adult";
    } else {
        message = "You are not an adult"
    }
    return message;

}
console.log(testIf(25));
console.log(testIf(251));

let number1 = 12;
number1 += 1;
console.log(number1);
console.log(typeof (number1));


message = message = JsTest;
function JsTest(data) {
    let message;
    if (data === 1) {
        message = "Hello number 1";
    } else if (data === 2) {
        message = "You are lose";
    } else if (data === 3) {
        message = "Well done";
    } else {
        message ="wrong number";
    }
    return message;
}
console.log(JsTest(1));
console.log(JsTest(4));

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if(totalSpent >= 50000){
  return GOLD_DISCOUNT;
  }else if(totalSpent >= 20000 && totalSpent < 50000){
  return SILVER_DISCOUNT;
  }else if(totalSpent >= 5000 && totalSpent < 20000){
   return BRONZE_DISCOUNT;
  }else{
  return BASE_DISCOUNT;
  }

  // Change code above this line
  return discount;
}

console.log(getDiscount(50000));


const tern = 7;
let resultTern = tern >= 7 ? "7" : "0";
console.log(resultTern);

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
switch(password){
  case null:
  message = "Canceled by user!";
  break;
  
  case ADMIN_PASSWORD:
  message = "Welcome!";
  break;
  
  default:
  message = "Access denied, wrong password!";
    }
    return message;
}
console.log(checkPassword(1213));


function getShippingCost(country) {
    let message;
  // Change code below this line
  let price;
switch(country){
  case "China" :
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
    
     case "Chile" :
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
    
     case "Australia" :
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
     case "Jamaica" :
    price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
    
  default:
    message = "Sorry, there is no delivery to your country";
}
  // Change code above this line
    return message;
    
}

console.log(getShippingCost("China"));
console.log(getShippingCost("abc"));

const droid = "droewewid";
const len = droid.length;
console.log(len);
console.log(droid[3]);

function getSubstring(string, length) {
  const substring = string.slice(string, length); // Change this line

  return substring;
}
console.log(getSubstring("Hello", 2));

function checkForSpam(message) {
  let result;
  // Change code below this line
    let m = message.toUpperCase();
    console.log(m)
  // Change code above this line
  result = m.includes("spam");
  return result;
}
console.log(checkForSpam("Get best spam sale offers now!"));
console.log(checkForSpam("Trust me, this is not a spam message"));

function checkForSpam(message) {
  let result;
  // Change code below this line
let m = message.toLowerCase();
  // Change code above this line
  if(result = m.includes("sale")){
  true;
  }else if(result = m.includes("spam")){
  true;
  }else{
  false;
  }
  
  return result;
}

console.log(checkForSpam('Get best sale offers now!'));

function oldAge(age) {
    if (age > 18) {
        return "You are an adult";
    }
    return "You are a minor";
}
console.log(oldAge(30));

const fruits = ["a", "b", "c"]
const a1 = fruits[0];
const b1 = fruits[1];
console.log(a1, b1);
const fruitsLength = fruits.length;
console.log(fruitsLength);

const fruitsArray = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruitsArray.length -1;
const lastElement = fruitsArray[fruitsArray.length-1];
console.log(lastElementIndex);
console.log(lastElement);
//---------------------------------------//-------------------------//
function getExtremeElements(array) {
  // Change code below this line
//   const a = array.length[0];
    let aArray = [];
    let bArray = [];
    aArray = array[array.length - 1];
    bArray = array[0];
    return [aArray, bArray];
  
 

  // Change code above this line
}
console.log(getExtremeElements(["f", "g", "h", "u", "y"]));
