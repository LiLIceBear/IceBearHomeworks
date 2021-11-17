//Task 1

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true, 
    },
  ];
 let filteredAge =data.filter(element => element.age === 31)
 let filteredData =data.filter(element => element.name === 'Jack')
 let filteredBoolean =data.filter((isActive) => Boolean(isActive == true))
 //Тут щось не так - без == тру показувала всі інші значення також норм, а ця штука їх поламала
 let filteredPosition =data.filter(element => element.position === "junior")
console.log(filteredData);
console.log(filteredPosition);
console.log(filteredAge);
console.log(filteredBoolean);

//Task2

//map
const numArray = [6, 7, 15, 22];
const numArrayMult = numArray.map(num => num*2);
console.log(numArrayMult); 

const numArray = [6, 7, 15, 22, 45];
const numArrayMult = numArray.map(function numMultIdx(num, idx) {
  return num*idx;
})
console.log(numArray,numArrayMult); 
console.log(`In array [${numArray}] on position ${idx}: ${num}`);
; //не показує складну строку


  const fruits = ["apple", "orange", "cherry"];
const getFruits = fruits.forEach(myFunction);
 
function myFunction(item, index) {
    return index + ": " + item; 
}

console.log(getFruits) // отак не  працює
let text = " "
  const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
 
function myFunction(item, index) {
     text += index + ": " + item; 
}

console.log(fruits) //працює, але якась дічь

const isNegativeArr = [-1, -3, 5,6, -7, , 44, 57,-14, -8, 9];
const getNegative = isNegativeArr.filter(negative);
function negative(num){
   return num < 0;
}

console.log('the negative number', getNegative);
