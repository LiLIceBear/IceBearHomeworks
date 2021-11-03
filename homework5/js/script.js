// function isNatural(num){
//     let flag = true;
//     for (let i = 2; i < num; i++) {
//         console.log(i);
//         if (num % i ==0) {
//             flag = false;
//             break;
//         }
        
//     }
// return flag
// }

// const result = isNatural();
// console.log(result);

// function getAllNaturalNumbers(start, finish ){
//     console.log('all numbers in array');
//     for (let i = start; i <= finish; i++) {
//       const isNumberNatural =   isNatural(i);
//       console.log(isNumberNatural)}
//         if(isNatural(i)){
//             console.log(1);
//         }
//     }
// getAllNaturalNumbers();

// function isNatural(num){
//     let flag = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             flag = false;
//             break;
//         }
//     }
//     return flag;
// }

// function showNaturalNumbers(start, finish){
//     console.log("ShowNaturalNumbers")
//     for (let i = start; i < finish; i++){
//         if(isNatural(i)){
//             console.log(i);
//         }
//     }
// }

// showNaturalNumbers(1, 100);

const LOGIN = 'ADMIN';
const PASSWORD = 'q2b3';
const authorize = () => {
    let userPassword;
    let userLogin;
    let isAutSuccess = false;
    let entryCount = 0;
    let entryLimit = 3;
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
    }while(!isAutSuccess &&   (entryCount < entryLimit))
}


authorize()
