"use strict";

//УСЛОВИЯ

/* if (4 == 1) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); */


/* const num = 50; */

/* switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
} */

// ЦИКЛЫ



/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* let num = 50; */

/* do {
    console.log(num);
    num++;
}
while (num < 55); */
/* 
for (let i = 1; i < 9; i++) {
    if (i === 6) { */
        /* break; */
/*         continue;
    }
    console.log(i);
} */

//сам.раб

/* do {
    const a = prompt('Один из последних просметренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          num++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        num--;
    }
}
while(num < 2); */

/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello world!");
console.log(num); */

/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(8, 3));
console.log(calc(10, 8)); */

/* function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {return a + b}; */

//CALLBACK

/* function first() {
    //Do something
    setTimeOut(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); */

// ОБЬЕКТЫ

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();
const {border, bg} = options.colors; */


/* console.log(Object.keys(options).length); */

/* console.log(options.name);

delete options.name;

console.log(options); */

/* let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter); */


// МАССИВЫ И ПСЕВДОМАССИВЫ 

/* const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - bs;
} */

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function() {
    console.log(`${i}: ${item} внутри массива ${arr}`); 
}); */

// arr.pop();
/* arr.push(1230);

console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

/* for (let value of arr) {
    console.log(value);
} */

/* const str = prompt("", "");
const products = str.split(",");
products.sort();
console.log(products.join(';')); */

// SPREAD ОПЕРАТОР ПЕРЕДАЧА ССЫЛКЕ

/* let a = 5;
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}; */

//const copy = obj; //ССЫЛКУ

/* copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); 

newNumbers.a = 10;
newNumbers.c.x = 10; */

/* console.log(newNumbers);
console.log(numbers); */

/* const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20; */

/* console.log(add);
console.log(clone); */

/* const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asasaas';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const aaray = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...g}; */

// ОСНОВЫ ООП ПРОТОТИП ОРИЕНТИРОВАННОЕ НАСЛЕДОВАНИЕ

/* let str = "some";
let strObj = new String(str); */

/* console.log(typeof(str));
console.log(typeof(strObj)); */

/* const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello!"); 
    }
}; */

//const john = Object.create(soldier);

/* const john = {
    health: 100
}; */

/* john.__proto__ = soldier; */

//Object.setPrototypeOf(john, soldier);

/* console.log(john.armor); */
//john.sayHello()