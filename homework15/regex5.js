let str = " x1y 722a 333 a123v1n a55555a qwe1 1zxc ";

let regExp = new RegExp("\\s([a-zA-Z])(\\d)+([a-zA-Z])(?=\\s)");
let regExpMatchArray = str.matchAll("\\s([a-zA-Z])(\\d)+([a-zA-Z])(?=\\s)");
// console.log(regExpMatchArray[0])
// console.log(regExpMatchArray[1])
// console.log(regExpMatchArray[2])
// console.log(regExpMatchArray[3])
console.log(" ")

let isNext = true
while (isNext) {
    let data = regExpMatchArray.next();
    if (data.value === undefined){
        isNext = false
        break
    }
    console.log(data.value[0])
}

