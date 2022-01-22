const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "A", name: "B", isReading: false },
  { id: 2, author: "A", name: "C", isReading: false },
  { id: 3, author: "A", name: "D", isReading: false },
  { id: 4, author: "A", name: "E", isReading: false },
  { id: 5, author: "A", name: "F", isReading: false },
];

function library() {
  const action = prompt('action');
  switch (action) {
      case "take":
          takeBook()
          break;
  case "return":
      returnBook()
      break;
    case "add":
        addBook()
        break
      default:
          alert('No action')
  }
  actionTo = action.toLowerCase().trim()
}

const takeBook = () => {
    const availableBooksNames = books
    .filter((book) => !book.isReading)
    .map((book) => ` - ${book.name}`)
    .join("\n");

  let desiredBookName = prompt(`Enter book name:\n${availableBooksNames}`);        
    console.log('take')
}
const returnBook = () => {
    returnID = Number(prompt('enter the IDof the book that you want to return'));
    let getIDromBooks =books.filter(book => book.id === returnID)
    if (getIDromBooks) {
        
        return
    }
    // const currentBook = books.find((book) => book.id === returningBookId);

    if (!getIDromBooks) {
        console.log('there is no book with such ID in the library');
    }
  
    if (!getIDromBooks.isReading) {
      alert("This book is not reading now");
  
      return;
    }
  
    getIDromBooks.isReading = false;
    alert(`Thanks, come again! Do you like "${getIDromBooks.name}"? `);
    
  if (!desiredBookName) {
    alert("No book name");

    return;
  }

  desiredBookName = desiredBookName.trim().toLowerCase();

  const desiredBook = books.find((book) => {
    return book.name.toLowerCase() === desiredBookName;
  });

  if (!desiredBook) {
    alert("No book with this name");

    return;
  }

  if (desiredBook.isReading) {
    alert("Sorry, this book is reading by someone else");

    return;
  }

  desiredBook.isReading = true;

  alert(`Thnx! Your book id is${desiredBook.id}`);

  console.log(`books`, books);
  };

  
    console.log('return')
}
const addBook = () => {
        const author = prompt('Enter the author');
        const name = prompt('Enter the book name');
        let newBook = {
            author,
            name,
            isReading: false,
            id: generateBookId(),
        };
      
        console.log(`newBook`, newBook);
        books.push(newBook);
        alert(`Book was added! Libary id: ${newBook.id}`);

        }
    console.log('add')
}

function getBookFromLibrary(books, whatBookintheLab){
   whatBook = prompt('Tell us  the name of the book that you need to take');
    for( let whatBookintheLab in books) {
        whatBookintheLab = books.filter(element => element.name === whatBook);
        if(books.some((isReading)=> isReading === true)){
            console.log('contains true book' `In array [${books}] on position ${id}: ${whatBookintheLab}`)
        }
        else{
            console.log('Choose another book')
        }
    }
    return whatBookintheLab()
}

result = getBookFromLibrary();
console.log('book', result)

function returnBook(books) {
    returnBookBack = prompt('Tell us the id of the  book that you like  to return');
    for( let idInArr in books) {
        idInArr = books.filter(element => element.id === returnBookBack);
        if(books.some((isReading)=> isReading === true)){
            console.log('contains true book' `In array [${books}] on position ${id}: ${whatBookintheLab}`)
        }
        else{
            console.log('Choose another book')
        }
    }
}

resultReturn = returnBook();
console.log('book', resultReturn);

newBookInfo ={
    firstName,
    lastName,
    bookName
}
function addBook() {
    newBookAuthor = prompt('ENter the first name of the authrr', newBookInfo)
}

const items = [
    { id: 1,  name: "B", isReading: false },
    { id: 2,  name: "C", isReading: false },
    { id: 3,  name: "D", isReading: false },
    { id: 4,  name: "E", isReading: false },
    { id: 5, name: "F", isReading: false },
  ];



const array = [-1,-2,3,4,5,6,7,8]
const fibonacciNumbers = (number) =>{
        
}
a
idInArr = products.filter(item => item.name );
