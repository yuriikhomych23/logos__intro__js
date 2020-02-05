//string : '' "" ``
//numder : 2, 12.2
//boolean: true false
//undefined
//null
//symbol
//object 


// Спеціальні значення 

//NaN - not a number| string / 12

//infinity 1/0
//-infinity -1/0


// console.log('Hello JS')

//var let const змінні 

// var firstVariable;
// firstVariable = 'JavaScript';
// console.log(firstVariable);


// const FIRST_VARIABLE= 'HTML'

// let firstVariable = 'JavaScript'


// let ten = +'10';
// let five = 5;

// let result = ten + five;

// console.log(result);


// alert('Hello guest')

// confirm('ghgh') появляєтсья два значення ок або скасувати 

// let checkAge = confirm('Age?');
// console.log(checkAge);


// prompt('Write something');

// let birthYear = prompt('Write your birth year');
// // console.log(birthYear);

// let year = prompt('Write actual year');


// let age = year - birthYear;
// console.log(age);

// parseInt витягує тільки ціле число 
// parseFloat витягує дробове число 

let hello = 'Hello ';
let name = 'Yurii';
let color = prompt('write a text color');
let size = prompt('text size');
let width = prompt('write width');
let height = prompt('write height');
let widthBorder = prompt('write width border');
let styleBorder = prompt('write style border')
let backgroundColor = prompt('write background color')

// document.write(hello + name + ' ! some text');
// document.write(`${hello} ${name}! dsvvvvvvvvda`);

document.write(`<p style='color: ${color}; font-size:${size}px'>${hello} <b>${name}</b></p>`);

// document.write('<p>')
    // document.write(hello)
        // document.write('<b>')
        // document.write(name)
    // document.write('</b>')
// document.write('</p>')


//1. ширина 
//2. висота
//3. ширина бордеру
//4. стиль бордеру 
//5. колір беграунду
//6. колір бекграунду


document.write(`<div style="width: ${w}px; height: ${h}px; border: ${wBorder}px ${sBorder}px ${}px"`)


