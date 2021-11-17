// console.log('Loop has started');
// for(let i = 0; i < 10; i++){
//     console.log('counter (i)', i);
//     console.log('condition ${i}:', i);
// }
// console.log('Loop has ended');
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for(let i = 2; i < 2048; i = i * 2){
    // outputs 0, then 1, then 2
//     console.log('i', i);
// }
// for(let i = 0; i < 20; i++){
//     const power = 2 ** i;
    // console.log('2 in power ${i}= ${power}');
//     const res = "2 in power" + i + " = " + power
//     console.log(res)
// }

//Loop interrupt: BREAK

// const findFirstNumber = (start,finish,divider) => {
//     let targetNumber;
//     for( let i = start; i <= finish; i++){
//         if (i % divider === 0){
//             targetNumber = i;
//             break;
//         }
//     }

//     return targetNumber;
// }

// const res = findFirstNumber(10,50,9);
// console.log('res', res);

// const findFirstNumber = (start,finish,divider) => {
//     for( let i = start; i <= finish; i++){
//         if (i % divider === 0){
//             return i;
//     }
// }
// };

// const res = findFirstNumber(10,50,9);
// console.log('res', res);

//Continiue operator interrupt iteration парні числа 

// const showEventNumbers  = (start, finish) => {
//     for (let i = start;  i <= finish; i++) {
//         if (i % 2 !== 0){
//             continue;
//     }
//         console.log(i);
//     }
// }
// showEventNumbers(2,10);

// const showEventNumbers  = (start, finish) => {
//     for (let i = start;  i <= finish; i++) {
//         if (i % 2 === 0){
//             console.log(i);
//     }
//     }
// }
// showEventNumbers(2,10);

//вКЛАДЕНИЙ ЦИКЛ
//таблиця множення
// for (let i  = 1; i<=9; i++) {
//     let row = " ";
//     for (let j  = 1; j<=9; j++) {
    // console.log('i,j', i, j); 
//     row = row + (i * j ) + " ";
//     }
//     console.log(row);
// }

//Loops are fast
// console.time('loop');

// for (let i = 0; i < 1000000000000000; i++) {
//     const a = 2 * i;
// }

// console.timeEnd('Loop');

//WHILE Loop
// let i = 3;
// while(i){
//     console.log('i', i);
//     i--;
// }

//Do while
// let naMe;
// do{
//     naMe = prompt('Enter your name');
//     if(naMe === null){
//         break
        //відмінили роботу циклу
//     }
//     console.log('name', naMe);
// }while(!naMe);
// const begin = 5;
// const end = 1;


// function is_Natural(n) 
//       {
// 	   if (typeof n !== 'number') 
// 	        return 'Not a number'; 
			
// 	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
// 	    }

// function getAllNaturalNumbers(start, finish ){
//     console.log('all numbers in array');
//     for (let i = start; i <= finish; i++) {
//       const isNumberNatural =   is_Natural(i);
//       console.log(isNumberNatural);
//         if(isNumberNatural){
//             console.log(i);
//         }
//     }


// }
// function getTheFuckingNumber(){
//     let n = 10;
//     for (let i = 2; i <= n; i++) { // Для всех i...
//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//           if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//         }
      
//         alert( i ); // простое число
//       }

// }

// getTheFuckingNumber();
// sum1 = getAllNaturalNumbers(1,10);
// sum2 = getAllNaturalNumbers(begin,end);
// console.log('result', sum2);
// console.log('result', sum1);

//Practice 
// Task 1 To write function for the user autorization. Wit the basic data validation.
const LOGIN = ADMIN;
const PASSWORD = q2b3;
const authorize = () => {
    let userPassword;
    let userLogin;
    let isAutSuccess = false;

    do{
        userLogin = prompt('Enter your login');
        if(!userLogin){
            alert('Enter login');
            continue;
        }

        userPassword = prompt('Enter your password');
        if(!userPassword){
            alert('Enter password');
            continue;
        }

        if(userLogin  === LOGIN || userPassword === PASSWORD){
           isAutSuccess = true;
        }else{
            alert('Data is incorrect');
        }
    }while(true){}
        alert('Welcome'); 
}

authorize()

const drawPiramid = (height) => {
    for (let i = 0; index < height; index++) {
        let spacesBefore = " ";
        let stars = "";
        for (let  j = 0; index < 2 * i + 1; i++) {
            let stars + = "*";
            for (let k = 0; k < height - i - 1; k++) {
                let spacesBefore + = " ";
                
            }
            console.log(spacesBefore + stars)
        }
    }
}

const desiredHeight = Number(prompt('What is the piramid height'));
drawPiramid(desiredHeight);