//Task1

const getMinMaxArray = (arr) =>{
    let min = 0;
    let max = 0;
for (let number of arr) {
   console.log('number', number)
    if (number < min) {
        min = number
    }

    if (number > max) {
        max = number
    }
}

console.log('max', max);
console.log('min', min);

const resArray = [min, max]
return resArray
}

const getMinMax = (arr) => {
    if (arr.length === 1) {
      return [arr[0], arr[0]]
    }
  
    const res = {
      min: arr[0],
      max: arr[0],
    };
  
    for (let number of arr) {
      console.log(`number`, number);
      if (number < res.min) {
        res.min = number;
      }
  
      if (number > res.max) {
        res.max = number;
      }
    }
  
    return res;
  };
  
  const minMax = getMinMax([2, 3, 6, 1, -10]);
  const minMax = getMinMax([1]);
  console.log(`minMax`, minMax)