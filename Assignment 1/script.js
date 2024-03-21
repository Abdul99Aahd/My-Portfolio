// // write a loop to print numbers from 1 to 10.
for (var a = 1; a <= 10; a++) {
    console.log(a);
}

// // write a loop to print even number from 1 to 20
for (var a = 1; a <= 20; a++) {
    if (a % 2 == 0) {
        console.log(a);
    }
}

// write a loop to print odd number from 1 to 15
for (var a = 1; a <= 15; a++) {
    if (a % 2 == 1) {
        console.log(a)
    }
}

// // write a factorial of a number. 

const num = 4;
var a = 1;

for ( var i = 1 ; i <= num;i++){
    a= a *i;
}
console.log(a);

// write a multiplication table of number 10

for ( let i = 1 ; i <=10; i++){
    console.log(10*i);
}

// // Write a loop to print the Fibonacci series up to the 10th term.

const number = parseInt(prompt("Enter the number"))
let n1=0, n2 = 1, nextTerm;

console.log('Febonacci series');

for ( let i = 1; i<=number; i++){
console.log(n1);
nextTerm=n1+n2;
n1=n2;
n2=nextTerm;
}



// Write a loop to find and print the sum of digits of a number 


 var input=parseInt(prompt("write a number"));

 for(number2 = 1; number2 <= input;number2++);
 console.log(input+input);


// Write a loop to print the reverse of a string.

let original = "Hello World";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);

// Write a loop to print the square of numbers from 1 to 10.


for( var i = 1 ; i<=10 ; i++){

console.log(i*i);
}

// Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).

function largestElement(arr){
let largestNum = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
        largestNum = arr[i];
    }
}
return largestNum;
}

const num1 = [10, 15, 18, 20, 23];
const result = largestElement(num1);

console.log("The largest element in the array is:" + result);