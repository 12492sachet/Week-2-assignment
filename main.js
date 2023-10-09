// Declaring a variable number and assigning it  a value.
const numberStr = '36';

//using explicit type conversion to convert "numberStr" to a number using the number function.

const convertedNumber = Number(numberStr);

//Displaying the converted number in th console.

console.log(convertedNumber);


//Declare a variable 'num' and assign it a numerical value.
const num = 2023;

//explicit type conversion to convert 'num' to a string using the 'String()' function.

const NumAsString = string(num);

//Displaying the converted string in the console.

console.log("converted string is:" + NumAsString);



//Declare a variable `truthyValue` and assign it a truthy value.
const truthyValue = "Sachet";

// Declare a variable `falsyValue` and assign it a falsy value.
const falsyValue = 0;

//Useing explicit type conversion to convert truthyValue to a boolean using the Boolean function.
const truthyBoolean = Boolean(truthyValue);

//  Useing explicit type conversion to convert falsyValue to a boolean using the Boolean function.
const falsyBoolean = Boolean(falsyValue);

//Displaying the converted boolean values in the console.
console.log("truthy value as boolean:", truthyBoolean); // it will display "truthy value as boolean: true"
console.log("falsy value as boolean:", falsyBoolean);   // it will display "falsy value as boolean: false"




// I created a currentDate variable and initialized it with the current date and time using the new Date() constructor.
const currentDate = new Date();

// Using the getTime method to convert currentDate` to a number representing the number of milliseconds since January 1, 1970 (UNIX epoch time).
const dateAsNumber = currentDate.getTime();

//Displaying the converted number in the console.
console.log("Current date as a number (milliseconds since January 1, 1970):", dateAsNumber);
