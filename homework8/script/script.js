//Task1 get true count 
// function arrayCount(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === true) {
//             result.push(arr[i]);
//         }
//     }
//     return result.length;
//    }
   
//    console.log(arrayCount([false,false,true,false,true,, true, true]))

   //Task2
//    array = [ "apples",
//    "oranges",
//    "pears",
//    "pears",
//    "apples",
//    "oranges",
//    "oranges",
//    "pears",];
// result = { };
// for(let i = 0; i < array.length; ++i) {
//     if(!result[array[i]])
//         result[array[i]] = 0;
//     ++result[array[i]];
// }
// console.log("array result", result)



//Task 3  - :(((())))
// const getExtraValue = (arr) =>{
//     var arr = arr.values();
//     let arrN = [];
//     for (let i = 3; i < arrN.length; i++) {
//         console.log(arr(i));
//         console.log(arr.length);
//       }
//       return arrN
// };

// const getNfromArr = (arr, getEvenNum, getOddNum) => {
//   getEvenNum = [];
//   getOddNum = [];
//   if ( arr % 2 === 0) {
//     return getEvenNum
//   }
//   else{
//     return getOddNum
//   }
// }

// const rez = getNfromArr([2,3,4,5,6,7,8,9]);
// console.log('result', rez);
const groupBy = require('lodash/groupBy');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const predicate = (num) => {
   if (num % 2 === 0) return 'even';
   return 'odd';
}
const result = groupBy(numbers, predicate);

let result = getExtraValue([2, 6, 8, 10, 3]); // -> 3
console.log('result', result)

// for (let letter of eArr) {
//   console.log(letter);
// }

// findExcess([2, 6, 8, 10, 3]); // -> 3et
