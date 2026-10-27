let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Total =", sum);



let a = 20;
let b = 10;
let operator = "+";
if (operator === "+") {
    console.log(a + b);
} else if (operator === "-") {
    console.log(a - b);
} else if (operator === "*") {
    console.log(a * b);
} else if (operator === "/") {
    console.log(b !== 0 ? a / b : "Cannot divide by zero");
} else {
    console.log("Invalid operator");
}



let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);



let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);



let a = 10, b = 20, c = 30;
console.log("Average =", (a + b + c) / 3);



let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}



let year = 2024;
if (year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}



let ch = "a".toLowerCase();
if ("aeiou".includes(ch)) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}
