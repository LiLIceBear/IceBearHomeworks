//Спросить с помощью prompt у пользователя 2 числа и записать их в переменные.
//Сравнить полученные числа.
//С помощью alert вывести на экран сообщение о том, какое число больше. Если числа равны - сообщить что числа равны
// const num1 = 1;
// const num2 = 2;
// const askQuestion = prompt('What is this number?');
// console.log( 'the number1 is', num1);
// alert ('type other number', askQuestion);
// const askQuestion2 = prompt('What is other  number?');
// console.log( 'the number is', num2);
// numResult = num1 < num2;
// const userReply =  Number (prompt('Can you tel what number is bigger?'));
// if(userReply === numResult ){
//     alert('2 is bigger than 1');}
// if(userReply!== numResult){
//     alert('NO');
// }
// console.log(numResult + userReply);
// why NO appears anyway

// const num1 = Number(prompt('Number 1'));
// const num2 = Number(prompt('Number 2'));
// if(num1 > num2){
//     alert('Number' + num1 + "is bigger than" +  "Number" + num2) ;
// } else if (num1 < num2) {
//     alert ('Number $ {num1} is bigger than number $ {num2}') ;
// }
// else{
//     alert('The numbers are equal');
// }

// let  tellNumber = Number(prompt("Tell me the number"));
// console.log('the number is', tellNumber);
// alert('Tell me another number')
// let tellNumber2 = Number(prompt("Tell me the number"));
// console.log('the number is', tellNumber2);
// addingResult = tellNumber + tellNumber2;
// console.log('the result for tellNumber + tellNumber2 is', + addingResult);
// alert(addingResult);
// alert('This was the demo version of our brand new calculator! ');
// let userContiniue = confirm('Do you want to calculate some more?');
// if(userContiniue == true){
//     alert('Lets get it started');}
// if(userContiniue == false){
//     alert('that is a pity - go and die');
// }
// let calculateOperation = prompt('What kind of operation would  you like to perform?');
// console.log(' the operation, tha I would like to choose is:', calculateOperation);
// switch (calculateOperation) {
//     case '+':
//       result = tellNumber + tellNumber2;
//       break;
//     case '-':
//       result = tellNumber - tellNumber2;
//       break;
//     case '*':
//       result = tellNumber * tellNumber2;
//       break;
//     case '/':
//       result = tellNumber / tellNumber2;
//       break;
//   }
// console.log( 'the result of multiplying  these numbers is:', result);
// alert(result);

// const a = Number(prompt('Enter number'));
// const action = prompt('Enter action(+,-,* or /');
// const b = Number(prompt('Enter number'));
// let result;

// switch (action) {
//     case "+":
//         result = a + b;
//         break;
//     case "-":
//         result = a - b;
//         break;
//     case "*":
//         result = a * b;
//          break;   
//     case "/":
//          result = a / b;
//         break;  
//     default:
//         result = "Incorrect action"
// }
// alert(result);
//Американські горик

// const childMinAge  = 18;
// const childVisitAge = Number(prompt('How old are you?'));
// const areWithParents = confirm('Are you with parents?');
// if (childVisitAge >= childMinAge || areWithParents){
//     console.log('You can visit our rollercoaster!');
//     alert ('You can visit our rollercoaster!');
// }else {
//     console.log('Sorry, you are too young. Bring up parents next time.');
//     alert( 'Sorry, you are too young. Bring up parents next time.')
// }

// const oldMaxAge  = 60;
// const oldVisitAge = Number(prompt('How old are you?'));
// let areOldWithParents = confirm('Are you with parents?');
// if (oldVisitAge >= oldMaxAge || areOldWithParents){
//     console.log('You can visit our rollercoaster!');
//     alert ('You can visit our rollercoaster!');
// }else {
//     console.log('Sorry, you are too young. Bring up parents next time.');
//     alert( 'Sorry, you are too young. Bring up parents next time.')
// }
// const adulminage = 18;
// const adultMaxAge = 60;
// const averageAdultAge = 18 

const userAge = Number(prompt('How old are you?'));
if ((userAge >= 12 &&  userAge < 18) || (userAge >= 60 && userAge < 80)) {
    const isAdults = confirm('Are you with parents?');
    if(isAdults) {
        alert("Please,come inside");
    } else {
        alert('Nope');
    }
}
else if (userAge < 12 || userAge >= 80){
    alert('Nope');
}
else{
    alert("Please,come inside");
}



