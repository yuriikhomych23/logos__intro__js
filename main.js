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




// LESSON 4 WHILE ЦИКЛ

// while цикл з передумовою

// while(умова){тіло циклу}

// let ask = prompt('Найкращий український боксер 2019 року');

// while(ask != 'Ломаченко') {
//     ask = prompt('Найкразий український боксер 2019 року');
// }

// цикл в циклі
// let i = 1, j;

// while( i <= 10) {
//     document.write(`<h2>Outside loop ${i}</h2>`);
//     j =1;
//     while(j <= 5) {
//         document.write(`<p>Inside loop ${j}</p>`);
//         j++;
//     } 
//     i++;
// }


// do {

// }
// while(умова)


// let i = 0;

// do {
//     console.log(i)
//     i++;
// }
// while (i <= 3);



// let num = +prompt('Введіть число');


// while(num != 0) {
//     num = +prompt('Введіть число');
//     num = num + num;

// console.log(num);
// }



//сума середнє арефметичне і кількість введень
// let ask;

// let count = 0;

// let result = 0;

// while(ask != 0) { 
//     ask = +prompt('Введіть число')
//     result = result + ask;
    
//     if(ask == 0) {
//         let serAref = result/count;
//         console.log(serAref)
//         console.log(count)
//     }
//     count++;
// }
// console.log(result)



// let  ask = prompt('Введіть кількість зірочок');
// let ask2;
// let count = 0;
// let star = '*';

// while(ask != count) {
//     count = ask + star;
//     ask2 = prompt('Горизонтально чи вертикально')

//     if ( ask2 = true) {
//         document.write(`<p>Outside loop ${count}<br></p>`);
//     }
// }




//виводить кількість відємних значень
// let i = 1;
// let count = 0;
// while(i <= 5) {
//     let ask = +prompt('Number')
//     if(ask < 0) {
//         count++;
//     }
//     i++;
// }

// console.log(count)


//кількість символів 
// let stars = +prompt('Count of  stars')
// let direction = +prompt('Якщо по горизонталі введіть 1, по вертикалі 2');

// let i = 1;
// while(i <= stars) {
//     if(direction == 1) {
//         document.write('<span>*</span>')
//     } else if(direction == 2) {
//         document.write('<p>*</p>')
//     }
//     i++;
// }


//break continue 
// for (let i = 1; i <= 10; i++) {
//     if(i % 2 == 0) {
//         continue
//     } 
//     console.log(i)
// }


//мітки
// exit:{
//     for(let i = 1; i < 8; i++) {
//         document.write(`<h2>Outside loop ${i} </h2>`)
//         for(let j = 1; j < 6; j++) {
//             if(j == 3) {
//                 break exit 
//             }
//             document.write(`<p>Inside loop ${j} </p>`)
//         }
//     }
// }





//switch case 

// switch(значення) {
//     case ідентифікатор :
//         дія
//         break
//     case : 
//         дія   
// }


// let country = prompt('Write country car');

// switch(country) {
//     case 'germany':
//         console.log('Audi', 'Mercedes', 'BMW');
//         break;
//     case 'france':
//         console.log('Renault', 'Citroen');
//         break;
//     case'italy' :
//         console.log('ferrari', 'maserati', 'fiat');
//         break;
//     case 'japan': 
//         console.log('subaru', 'honda', 'toyota', 'nissan');
//         break;
//     default:
//         console.log('i dont know this country');
//         break;
// }




//FUNCTION

// FUNCTION DECLARATION, FUNCTION Expression, ARROW FUNCTION

// function sayHello(){
//     console.log('Hello Ivan');
// }
// sayHello();


// function sayHello(name){
//     console.log(`Hello ${name}`);
// }
// sayHello('Ivan');

//function declaration можна викликати навіть перед створенням




// function sayHello(name, lastName){
//     console.log(`Hello ${name} ${lastName}`);
// }
// for(let i = 0; i < 3; i++) {
//     let nameAsk = prompt('Write your name');
//     let lastNameAsk = prompt('Write your lastname ')
//     sayHello(nameAsk, lastNameAsk);
// }



//старіший метод написання функції
//за замовчуванням default значення
// function profile(firstName, secondName) {
//     firstName = firstName || 'Guest'
//     secondName = secondName || 'Вітаємо'
//     console.log(`${firstName} - ${secondName}`)
// }

// profile('Oleg', 'Olegovych');
// profile('Oleg');
// profile();



//новіший синтаксис
// function profile(firstName = 'Guest', secondName = 'User') {
//     console.log(`${firstName} - ${secondName}`)
// }

// profile('Oleg', 'Olegovych');
// profile('Oleg');
// profile();



// function sumaAB(a, b) {
//     let result = a + b;

//     return result;
// }
// let suma = sumaAB(5, 15);
// console.log(suma)



// function f1(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(arguments)
//     for(let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])//виводить кількість елементів
//     }
// }

// f1(4,5,6,7) //виведе тільки перші три елементи



//виводить не вказаний елемент
// function f1(a, b, c, ...arg) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(arg)

// }

// f1(4,5,6,7)



//число в додатній мінусовій і нульовій степені
// let num = +prompt('number1')
// let step = +prompt('number2')

// console.log(pow(num, step))

// function pow(num, step) {
//     let result = 1;
//     let checker = false;

// if(step < 0) {
//     step = -step;
//     checker = true;

// }

//     for(let i = 1; i < step; i++) {
//         result = result * num;
//     }

//     if(checker) return 1/result
//     else return result;
// }
