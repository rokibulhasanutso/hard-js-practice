// variable introduction

// What is variable ?
// Variable is visualization storing box. Variable can store some data or information.

// Syntex
var myName = 'Rokibul Hasan' //

// Variable name declaration rules
// 1. Variable declaration can not start with a number 

// var 123 = "First name"; // wrong
// var 123ABC = "First name"; // wrong
// var 123$ = "First name"; // wrong

// right way |start with string and after use number|
var abc123 = "First name";

// 2. Others way you can use Dolar($) and underscore(_) sign
var $abc123 = "First name";
var _abc123 = "First name";

// 3. JavaScipt is a case sensitive language
var ABC = "First name";
var abc = "firstname";
// Note: ABC and abc not same. There are two different Variable name

// 4. And also others way you can not declare a variable
// var #abc = "First name";
// var #123 = "First name";
// var _#abc = "First name";
// var $#123 = "First name";
// var @abc = "First name";
// var %abc = "First name";
// var /123 = "First name";
// var *123 = "First name";
// var -123 = "First name";
// var +123 = "First name";

// Note: I suggest that variable name decleare with alphabate
var yourname = "Humyrah";
var your_name = "Humyrah";
// better word convention
var yourName = "Monalisa";


// JavaScript update version(ES6) declaration let and const

// let

// 1. let is a block scope declaration
{
    let personName = 'Hasan';
}
// Note: It is declare within block scope
// you can not access outside of blockscope
console.log(personName); // It is wrong or error

// Right way to
{
    let personName = 'Hasan';
    console.log(personName);
}

// 2. let can not redeclare in the block scope
{
    let personName = 'Hasan';
    console.log(personName);
    // let personName = "Robart" // wrong
}

// Right way to this
{
    let personName = 'Hasan';
    console.log(personName);
}

let personName = "Robart";

// 3. Mandatory or not
{
    // declare mandatory
    let personName;
    {
        // but define not mandatory
        let otherName = "Robart";
    }
    // define after declaration
    personName = 'Hasan';
}


// const
// It is same to like let declarer variable
// Just between difference is 
//  1. let dose not have to be declared and defined together.
//  2. but const must be declared and defined together 

// {
//     const PI;    // wrong
//     PI = 3.1416; // wrong
// }

// Right way to this
{
    const PI = 3.1416;
}