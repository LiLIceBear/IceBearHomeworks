//Task1 - Create a work Schedule:
//ask user (using loop) about the task and time when it should be performed
//the result should be populated into the object = {time; task}
//prompt should appear till user presses ESC or Cancel
//return object = {schedule}
//console.log(schedule, object).:
// {
//     "10:00": "Подъем",
//     "10:15": "Зарядка",
//     "10:30 ": "Завтрак",
//   }
// let time = new Date();
// const clientSchedule = {
//         task: prompt('Tell me what do you need to do today?'),
//         time: prompt("Tell me when"),
//        date: function time_convert(time)
//  { 
//   var hours = Math.floor(time / 60);  
//   var minutes = time % 60;
//   return hours + ":" + minutes;         
// }
// };

//   function getUsersFullSchedule(){
//         return clientSchedule + time_convert()
    
//       }

//   getUsersFullSchedule();
//   console.log("Schedule" , clientSchedule);

//   function time_convert(time)
//  { 
//   var hours = Math.floor(time / 60);  
//   var minutes = time % 60;
//   return hours + ":" + minutes;         
// }

// console.log(time_convert(clientSchedule.time));
// console.log(time_convert(450));
// console.log(time_convert(1441));
// const userScheduleAligned = () => {
//     for (let time in clientSchedule != false) {
//         console.log(`Task:`, clientSchedule.task);
//         console.log(`Time,when it should be performed:`, clientSchedule.time);
        
//     }
// }


// result = userScheduleAligned(clientSchedule.time, clientSchedule.task);




// console.log(clientSchedule.task);
// console.log(clientSchedule.time);

//////////////////////////////////////////

// const key = prompt('tell us what you need to do and when')



//Task2
//Create function that  fins the workers salary
//function should contain two objects(strings) that contain the amount of workers salary
//need to add all of the mentioned amounts and return it
//the result should be 14901.35.

// const salaries = {
//     manager: 1500,
//     developer: 2200,
//   };

//  const salaries2 = {
//     manager: 1500,
//     developer: 2200,
//   };

//   function getSalariesTotal1(salaries, salaries2){
//       const total = salaries[manager] + salaries2[developer];
//       return total
//   }
// const result = getSalariesTotal1();

//   console.log('total', result)

/////////////////////////////////
//Task 2
const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
  };
  
  
  const getSalariesTotal = (salaries) => {
    let total = 0;
    for (let employee in salaries) {
      console.log(`employee`, employee);
      console.log(`salaries[employee]`, salaries[employee])
      total += Number(salaries[employee]);
    }
  
    return total;
  };
  
  
  const totalResult = getSalariesTotal(salaries);
  console.log(`totalResult`, totalResult)


//   let canceled = false;
// let object = {};
// while (canceled === false) {
//   let key = prompt('Your schedule?');
//   if (key === null) {
//     canceled = true
//     break
//   }
//   object[key] = prompt('Your task?');
//   if (object[key] === null) {
//     canceled = true
//     break
//   }
// }
// console.log(object);

//Task 1
function getClientSchedule(){
   let clientSchedule = {};
    let canceled = false;
    while (canceled == false) {
           let task =  prompt('Tell me when zou need to perform your task ');
           if(task == null){
            canceled = true
            break
           }
           clientSchedule[task] =  prompt("Tell me what do you need to do today? ");
           if(task == null){
            canceled = true
            break
           }
    }
    return clientSchedule
}

result = getClientSchedule()
console.log('schedule', result);


