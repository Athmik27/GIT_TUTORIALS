let n = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}



let n = 12345;
let count = 0;
do {
    count++;
    n = Math.floor(n / 10);
} while (n > 0);
console.log("Digit count =", count);




let n = 1234;
let reverse = 0;
while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
}
console.log(reverse);




let n = 1234;
let sum = 0;
while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}
console.log("Sum of digits =", sum);




let n = 121;
let original = n;
let reverse = 0;
while (n > 0) {
    reverse = reverse * 10 + n % 10;
    n = Math.floor(n / 10);
}
console.log(original === reverse ? "Palindrome" : "Not palindrome");




function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));




let a = 0, b = 1;
for (let i = 1; i <= 10; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}




let arr = [5, 2, 8, 1, 3];
arr.sort((a, b) => a - b);
console.log(arr);




let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
console.log(unique);
