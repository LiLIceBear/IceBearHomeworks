
function getSum (){
    const num1 = Number(prompt('Tell me the first number'));
    const num2 = Number(prompt('Tell me the second number'));
    const sum = num1 + num2;
    console.log(sum);
}

getSum()
getSum()

let userName = '';
function getUsername(){
    console.log('username', userName);
    if(!userName){
        userName = prompt('What is your name?');
    }
}
//Local argument and global
getUsername();
console.log('username', userName);

let login ='user1';
function getlogin(){
    let login = 'Admin2';

    login = prompt('Enter your login');
    console.log('login local variable', login);
}

getlogin()
console.log ('login global', login);

//Параметри функці\

const number1 = 10;
const number2 = 20;
const a = 100;
const b = 200;
function add(a,b){
    console.log('a', a);
    console.log('b', b);

    const sum = a + b;
    console.log('sum', sum);
}

add (1,3);
add(number1, number2);
add(a,b);

// Повертаюче значнггя функці\
function getNumber(){
    return 5;
}

const number = getNumber();
console.log('number', number);
__________________________________________
function getFullUserName (name, surname){
    const result = name + "  " + surname;
    return result;
}

const fullName = getFullUserName ('John' , 'Brown');
console.log ('fullname' , fullName);

function max(a,b) {
    return a> b ? a : b;
}

console.log('max 13,12' , max(13, 12));

function getSum(a,b) {
    console.log('Function start');
    if (
        !a
        || !b
        || typeof a !=='number'
        || typeof b !== 'number'
    ) {
        console.log ('The data is incorrect!');
        console.log ('return');
        return;
    }

    console.log ('returning the sum');
    return a + b;
}

console.log('Before the function appearance');
const sumResult = getSum(1,2);
console.log ('sumResult', sumResult);
console.log('After  the function appearance');

//Аргументи по замовчуванню
function showText(text){
    console.log(text)
}

showText('Hello world');
showText();


// необов язковий аргумент
function getChatText(text, name = 'guest'){
    return name + ": " + text;
}

console.log(
    'getChatText("Hi', 'Nik')'
    getChatText('Hi', 'Nick');
)
console.log(
    'getChatText("Hi", "")';
    getChatText('Hi');
)

function calculate (operation, a = 0, b = 0){
    console.log('a', a);
    console.log('b', b);
    console.log('operation', operation);
if (operation === 'plus'){
    return a + b;
} else if (operation === 'minus'){
    return a - b;
}

calculate('plus' );

//Стрілочні функції

function sum(a, b){
    return a + b;
}
// два варіанти стрілочного зовбраження функці\
const sum = (a, b) => {
    return a + b;
}

const sum = (a, b) => a +b;

const res1 = sum(4, 5);
const res1 = sum(0, 5);
console.log('res1', res1);
console.log('res1', res1);





}