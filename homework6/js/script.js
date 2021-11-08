//Task 1  User registration  with password validation
//Ask user name, surname till user enters the correct data
//Name and surname are valid when they have at least 1 symbol.
//Valid password - any string that is longer than 6 characters and with UPPER and Lower cases
//Correct password examples: AbCxx12 , 1234xY, abcdeF.
//Incorrect password examples:1q2w3e , 123456, xyzxyz.
//After the data is validated, display the formated name and surname in the alert - jOhn brOWN => Jhn Brown.
//Use do while
// let getUserName;
// let getUserSurName;
// const getUserFullName = () =>{
//     let getUserName = prompt('enter your name');
//     let getUserSurName = prompt('enter your name');
// }



// const result = getUserFullName();
// console.log('User full name is', result);
//says that result is undefined

//  let getUserName;
//  let getUserSurName;
//  let isSuccess = true;
//  upper = ["A"-"Z"];
//  lower = ["a"-"z"]
//  number = [0-7];
//  do {
//      getUserName = prompt('Enter your name');
//      if (!getUserName) {
//          alert('The filed is empty.Enter your name');
//          if (getUserName.length  < 1) {
//              alert("The name is not valid. You are smart enough to enter more than 1 character");
//          }
//      }
//      console.log('user name is' , getUserName);
     
//      getUserSurName = prompt('Enter your surname');
//      if (!getUserSurName) {
//          alert('The filed is empty.Enter your name');
//          if (getUserSurName.length  < 1) {
//             alert("The Surname is not valid. You are smart enough to enter more than 1 character");
//         }
//      }
//      console.log('user surname is' , getUserSurName);

//      getUserPassword = prompt('Enter your password');
//      if (getUserPassword.length <= 6) {
//          alert('your password should contain at least 6 characters');
//          if (getUserPassword !=upper || getUserPassword !=lower || getUserPassword !=number ) {
//              alert('your password should contain at least 6 characters, upper ans lower case letters');
//          }
//      }

//      console.log('user password is' , getUserPassword);

//      let getUserNameCorrectForm = getUserName.toLowerCase();
//      firstCharacter = getUserName.charAt(0);
//      getFirstUpperCase = firstCharacter.toUpperCase();
//      capitalizedName = firstCharacter.toUpperCase() + getUserNameCorrectForm.slice(1);
//      alert(capitalizedName);
    //  capitalizedName();- is not getUserNameCo|??
    //  console.log('User name'. capitalizedName);

    //  let getUserSurNameCorrectForm = getUserSurName.toLowerCase();
    //  firstSurCharacter = getUserSurName.charAt(0);
    //  getFirstSurUpperCase = firstSurCharacter.toUpperCase();
    //  capitalizedSurName = firstSurCharacter.toUpperCase() + getUserSurNameCorrectForm.slice(1);
    //  alert(capitalizedSurName);
    // } while (!getUserSurName && !getUserName);
    //  capitalizedSurName();
    //  console.log('User Surname'. capitalizedSurName);

    // } while (I dont know what condition should I erite here);

//Task 2 random numbers generator in some array. Function should contain the highest number and the lowest - array borders
// Function should return number which is >= the lowest one and <= the highest one. 
const HIGH = 15;
const LOW = 1;
const array = [1 , 15];
let randomNumber;
function getTheRandomNumberfromArray(){
        return array[Math.floor(Math.random()* array.length)];
}

resultedRandomNumberFromArray = getTheRandomNumberfromArray(1,15);
console.log('The random number from array is', resultedRandomNumberFromArray);

// function getTheRandomNumberfromArray(){
//     if (randomNumber <= HIGH && randomNumber >=LOW) {
//         return array[Math.floor(Math.random()* array.length)];
//     }
// }

// resultedRandomNumberFromArray = getTheRandomNumberfromArray(1,15);
// console.log('The random number from array is', resultedRandomNumberFromArray);

