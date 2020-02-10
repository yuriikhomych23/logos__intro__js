//LESSON 1 INTRO JS типи даних

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

// let hello = 'Hello ';
// let name = 'Yurii';
// let color = prompt('write a text color');
// let size = prompt('text size');
// let width = prompt('write width');
// let height = prompt('write height');
// let widthBorder = prompt('write width border');
// let styleBorder = prompt('write style border')
// let backgroundColor = prompt('write background color')

// document.write(hello + name + ' ! some text');
// document.write(`${hello} ${name}! dsvvvvvvvvda`);

// document.write(`<p style='color: ${color}; font-size:${size}px'>${hello} <b>${name}</b></p>`);

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


// document.write(`<div style="width: ${w}px; height: ${h}px; border: ${wBorder}px ${sBorder}px ${}px"`)



//LESSON 2 JS INTRO........................................................................

// JS Оператори 
// +, -, /, *, % остача від ділення

//оператори рівності
// = присвоєння, == перевірка значення, === строга перевірка, ! (не),
//!=(не дорівнює), !==(не дорівнює по типу)

// >, <, >= , <=, &&(і), ||(або), &, |(перевіряється один і інший)

// let a = 1;
// a++; // a = a+1; інкремент 
//++a (інкремент) --а (декремент)

// let i = 1;
// let j = i++;
// console.log(i);
// console.log(j);

// let a = 1;
// let b = ++a;
// console.log(a);
// console.log(b);


// n *= i; скорочений синтаксис
// n = n*i; 


// для створення умови 
// if (умова) якщо умова справджується виконується тіло умови {тіло умови}
// else {у всіх інших випадках}


// let age = prompt('Скільки років');

// if(age >= 18) {
//     alert('Ласкаво просимо');
// } else {
//     alert('Допобачення');
// }


// if(age > 21 || age == 21) {
//     console.log('Ласкаво просимо')
// } else {
//     console.log('Допобачення')
// }

// if(age >= 21) { 
//     console.log('Ласкаво просимо')
// } else if(age == 20)  {
//      console.log('Почекай ще рочок')
// } else {
//     console.log('Допобачення')
// }


// let age = prompt('Скільки років?');

// if(age >= 21) {
//     let check = confirm('З вас 200 грн за вхід') 
//     if(check) { 
//         console.log('Ласкаво просимо')
//     } else {
//         console.log('Заходьте іншим разом')
//     }
// } else {
//     console.log('Вибачте вам ще зарано')
// }


// let login = 'Admin';
// let password = 1111;

// let signLogin = prompt('Enter Login');
// let signPassword = prompt('Your Password');

// if(signLogin == login || signPassword == password) { 
//     console.log(`Ласкаво просимо ${login}`)
// } else {
//     console.log('Логін або пароль не вірний')
// }




// let flat = prompt('Введіть номер квартири');

// if (flat >= 1 && <= 20) {
//     console.log('Підїзд №1')
// } else if (flat <= 48) {
//     console.log('Підїзд №2')
// } else if (flat <= 90) {
//     console.log('Підїзд №3')
// } else if (flat == '') {
//     console.log('Введіть номер квартири')
// } else if (flat == null){
//     console.log('Ви скасували пошук')
// } else { 
//     console.log('Такої квартири не існує')
// }



//тернарний оператор
// let age = prompt('Write age');

// let correct = age >= 18 ? true : false;

// alert(correct);


// let admin = 'admin';
// let user = 'user';
// let pro = 'pro';


// let passAdmin = 1111;
// let passUser = 2222;
// let passPro = 3333;



// let name = prompt('Write your status');
// let password = prompt('Write your password');

// if (name == admin && password == passAdmin) {
//     document.write(`<div style="width: 300px; height: 300px; background-color: red;
//     margin: 100px auto"> Welcome ${admin}</div>`)
// } else if ( name == user && password == passUser) {
//     document.write(`<div style="width: 300px; height: 300px; background-color: blue;
//     margin: 100px auto"> Welcome ${user}</div>`)
// }  else if ( name == pro && password == passPro) {
//     document.write(`<div style="width: 300px; height: 300px; background-color: green;
//     margin: 100px auto"> Welcome ${pro}</div>`)
// } else {
//     alert('Wrong pass or name')
// }



//LESSON 3 JS INTRO цикли

//for, while, dо while;

// for(початок циклу; умова; крок){тіло циклу} 

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// let n = +prompt('Start');

// for ( let i = n; i <= 100; i++) {
//     console.log(i)
// }


// let start = +prompt('Start');
// let end = +prompt('End');

// for (let i = start; i < end; i++) {
//     console.log(i);
// }


// for (let i = 4; i <= 400; i++) {
//     console.log(i)
// }


// for (let i = 4; i <= 1000; i) {
//     console.log(i)
// }


// for ( let i = 1000; i <= 2000; i++) {
//     console.log('&#' + i)
//     document.write(`&#${i}`)
// }

//виведення числа в + - степінь
// let number = +prompt('Введіть число');
// let pow = +prompt('Введіть степінь');
// let  result = 1;
// for (let i = 1; i <= pow; i++) {
//     result =result*number;
// }


// if (pow > 0) {
//     for (let i = 1; i <= pow; i++) {
//     result =result*number;
//     }
// }else if(pow < 0) {
//     pow = - pow;
//     for (let i = 1; i <= pow; i++) {
//     result = result*number;
//     }
//     result = 1 / result;
// }

// console.log(result);



//додавання числа амого на себе
// let from = +prompt('from');
// let to = +prompt('to');
// let result = 0;
//через умови
// let change;
// if(from > to) {
//     change = from;
//     from = to;
//     to = change;
// }
// for(let i = from; i <= to; i++) {
//     result += i;
// }
// alert(result);
//через два цикли
// for(let i = from; i <= to; i++) {
//     result = result + i;
// }
// for (let i = to; i <= from; i++) {
//     result = result + i;
// }

//область видимості 
// for (let i = 1; i <= 10; i++) {
//     document.write(`<h2>Outside Loop ${i}</h2>`)
//     for( let j = 1; j <= 3; j++) {
//         document.write(`<p>Inside Loop ${j}</p>`)
//     }
// }


// if(true) {
//     let a = 10;
//     console.log(a);// тут консолька виведе 
// }
// console.log(a) а тут не виведе, а поза межами



