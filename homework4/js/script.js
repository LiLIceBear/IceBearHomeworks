//Task1
function getResult(a,b){
    sum = a + b;
    return sum;
}

const result = getResult(10,15);
const result2 = getResult(1,15);

console.log('10+16=', result);
console.log('10+16=', result2);
//////// =>
const sum = (a,b) => a + b;
const result = sum(10,15);
console.log(result);

//Task2
function getUserAge(name, age){
    name = prompt('WHat is your name?');
    console.log('name', name);
    age  = Number(prompt('How old are you?'));
    console.log('age', age);
    if(age < 30){
        alert('You are not old enough' , name);
    } 
     else{
        alert('Hello' + " " + name)
    }
    return name
}

const userGreet = getUserAge('', '');
console.log('Hello', userGreet);

//Піднесення до степеня

function getExponetiation (c, d = 3){
    c = Number(prompt('Tell me the needed number'));
    exponent = c ** d;
    console.log('number', c);
    return exponent;
}
 const result = getExponetiation();
 console.log('the result of exponentiation of the needed number is', result);

 // ====>>>>
 const getExponetiation = (c, d = 3) => c ** d;
 const result = getExponetiation(2,3);
 console.log(result);




