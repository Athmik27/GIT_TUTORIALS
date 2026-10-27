let num = 7;
if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}



let a = 15;
let b = 25;
if (a > b) {
    console.log("Largest =", a);
} else {
    console.log("Largest =", b);
}




let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("Factorial =", fact);



let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}



let text = "JavaScript";
let reversed = text.split("").reverse().join("");
console.log(reversed



let num = -5;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
