//Цілі чисоа
const num1 = 10;
//Десятичні числа
const num2 = 5.14;
const num3 = 50.500000;
console.log('num3', num3);

const max = Number.MAX_SAFE_INTEGER; //2**53;
const min = Number.MIN_SAFE_INTEGER; //-2**53;

//BigInt
// const bigNum = 56563454254254544545458847467673735656346436436436355n;
// const extraBigNum = BigInt('56563454254254544545458847467673735656346436436436355');
// console.log(bigNum);

// const num = 10;
// const bigIntFromNumber = BigInt(num);

//Binary system

//0   0
//1    1

const binaryNumber = 0b10010001; //2
console.log('binaryNumber', binaryNumber);

//hexsecimal 0123456789 abcdef

//Метод числа

//toString

console.log('number.toString', number.toString(5));

//isNun
Is it A number?

// isFinite - Is number not infinity?
const realNumber = () => {
    const userNumber = prompt('Enter the number');
    if(isNaN(userNumber) || !isFinite(userNumber)){
        alert('You have entered not a number')
    }
    
};

realNumber();
//фуекція хелпер
const isNumberValid = (value) => !isNaN(value) && isFinite(value)
//функція валідатор
const getNumber = () => {
let userVale;

    do {
        userValue = prompt('enter the right number');
    } while (isNumberValid(userValue));

    return Number(userVale);

}

const userNumber = getNumber()
//Треба ввести коректне число багато раз

//parceInt parceFloat 23 min
//вертає любу фігню в число
console.log('Number(100$)', Number("100$")); // Nan
console.log('Number(100$)', parceInt("100$")); // 100
console.log('Number(100$)', parceFloat("100.44UAH$")); // 100.44
console.log('Number(100$)', parceFloat("$100.44UAH")); // Nan


//Math 28min
// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunk()

//Math random  - generates random numbers 29 min

const random  = Math.random();

console.log('random', random);

const GetRandomNumber = (max) => {
    return Math.round(Math.random() * max);
};

const integerRandom  = GetRandomNumber(10);
console.log('integerRandom', integerRandom);

//Втрата точності  обрахунку

const res =  0.1 + 0.2;
console.log( ' res === 0.3', res === 0.3);

const example = 100.5;

console.log('ExampleToBefixed', example.toFixed(3)); // 100/500

//Строки

let string = 'test'

const age = 25;
const birthYear = 1998;
let templateString;

templateString = `Hello Me ${age} old`
console.log(templateString);
templateString = `Hello Me ${2021 - 1998} old`
console.log(templateString);

//Виклик функці\ всереині шаблонно\ строки
 
const getUserPhrase = () => {
    return prompt('What have you said?');
}

templateString = `User said " ${getUserPhrase} "`;
console.log(templateString);

const getUserMessage = (message, myname = "Guest") => {
        //return myname + ":" + message;
        return `${myname} : ${message}`;
}

const message = getUserMessage("Hi", "Liliia");
console.log('message', message);

//MultiLine strings 6 min

multilineString = `
Hi
How are you?
`;

console.log('multilinestring', multilineString);

//Екранування символів та спецсимволи 6:34
//перенесення строки \ 
let shieldedString;
// shieldedString = "I said: 'Hello'";
console.log(shieldedString);
shieldedString = `I said \'Hello\'` ;
const lineBreak = "Hell\oworld";
console.log(lineBreak);

//Символи в строках та довжина строки  12 17
//Виведення довжини строки
const test ='123456';
const length= test.length;
console.log('length', length);

const greeting = 'Hello World';
console.log('greeting', greeting);
console.log(greeting.length);

//Отримання конкретного символу зі строки
/*Індекс - порядковий номер положення символа в строці - почина
ться з нуля */
const mname = "Peter";
const firstSymbol = mname [0];
console.log(firstSymbol);

//Витянути останній символ
const lastSymbol = mname[mname.length - 1];
console.log(lastSymbol);

//Строки незмінні 15 ьшт
//String Methods

//toLoverCase()
//toUpperCase()
const example = "SoMeThing WroNG";
console.log(example);

const lowerExample = example.toLowerCase();
console.log(lowerExample);

const UpperExample = example.toUpperCase();
console.log(UpperExample);

//Логічні підстроки 18  хв
//slice
const fullName = 'Enter name';
const extreactedName = fullName.slice(0,4);
const extreactedSurName = fullName.slice(5);
console.log(extreactedName);
console.log(extreactedSurName);
  
//233 хв
//indexOff() - виводить індекс підстроки в строки в яко\ цей метод викликаний

//28хв показано функці х практики

//Зрівняння строк - зрівняння  ї символів по алфавіту  - 30в
/*маленькі букви більщі за великі
але букви далі в алфатіві більщі за т шо на початку - тоді д бде більше за а
коротша строка бцде меншою за довшу*/

const getCharCodes = (string) => {
    for(let i = 0; i < string.length; i++){
        const char = string[i]
        console.log(`${char}`, char.charCodeAt())
    }
}

getCharCodes('Hello');
//35min
//localCompare(string which result we would like to receive)

//PRACTICE TIME
//Task 1 - to write a function which receives a hex code and returns the RGB numbers
//Task 2 - to write the opposite function to return the hex codes
//Task 3 to hide the Master card number 

const GetRGBFromHex = hexCode =>{
    const red = hexCode.slice(1,3);
    const blue = hexCode.slice(3,5);
    const green = hexCode.slice(5,7);

    console.log('red', red);
    console.log('blue', blue);
    console.log('green', green);

    const decimalRed = parceInt(red, 16);
    const decimalBlue = parceInt(blue, 16);
    const decimalGreen = parceInt(green, 16);

return `rgb ${decimalRed}, ${decimalBlue}, ${decimalGreen}`
}

const rgbResult = GetRGBFromHex("#fffffff");
console.log(rgbResult);

let codes = " ";
for (let i = 1; i < hexCode.length; i+=2) {
    const color = hexCode.slice();
    
}













