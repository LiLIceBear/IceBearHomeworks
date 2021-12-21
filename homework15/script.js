//Task 1 
const response = {
    data: [
        {
            username: "samuel",
            is_active: true,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
            username: "john",
            is_active: false,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
            username: "peter",
            is_active: false,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
    ],
    meta: {
        paging: {
            current: 1,
            next: 2,
            prev: null,
            total: 14,
            per_page: 3,
        },
    },
};


const active = response.data.map(
    function ({is_active}) {
        if (is_active) {
            return is_active;
        }
    }
);
active;

const {is_active: isActive} = active;

console.log(active, isActive);

let get = response.meta;
const {paging: {total}} = get;
console.log("total", total);

//   const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne',
//     address: {
//       city: 'Gotham'
//     }
//   };
//   // Object destructuring:
//   const { address: { city } } = hero;
//   city; // => 'Gotham'

//Task 2 
const user = {
    name: "dick",
    surname: "brown",
    age: 17,
    height: 178,
};

const {name, surname} = user;
console.log(name, surname);

const parameters = {};

['age', 'height'].forEach(prop => parameters[prop] = user[prop]);
console.log("parameters", parameters);

const max = ([a, b]) => {
    return a > b ? a : b;
};

//Task  3 
const numberMax = (arr) => {

    let max = arr [0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}
maxResult = numberMax([1, 2, 3]);
console.log(maxResult);
//Task 4 
const createMessage = (guest) => {
    const {author, text, receiver: receiver, time} = guest;
    let timeChosen = time.toLocaleDateString();

    return `From ${author} to ${receiver}: says ${text} (${timeChosen})`;
};

const message = createMessage({
    author: "Peter",
    text: "Hello",
    receiver: "Sam",
    time: new Date()
});
console.log(message)




// начинается с буквенного символа
// заканчивает на буквенный символ
// между первым и послденим символом находятя только числовые символы
// для поиска используйте метод match
  






