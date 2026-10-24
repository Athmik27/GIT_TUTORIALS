let n = 55;
if (n % 5 === 0 && n % 11 === 0) {
    console.log("Divisible by both");
} else {
    console.log("Not divisible by both");
}




let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 35) {
    console.log("Grade D");
} else {
    console.log("Fail");
}



let n = 12345;
let count = String(n).length;
console.log("Digits =", count);




let a = 10, b = 5;
let op = "*";
switch (op) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(b !== 0 ? a / b : "Cannot divide by zero");
        break;
    default:
        console.log("Invalid operator");
}




for (let i = 1; i <= 100; i++) {
    console.log(i);
}




for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}




for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}




let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum =", sum);
