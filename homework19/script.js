
const container = document.getElementById("container");
 const getCountryInfo = async() =>{
     const  response = await fetch("https://ipapi.co/json/");
     const info = await response.json();
     const {country_capital, country_name, currency} = info;
     const flagUrl = await getCountryFlag(country_name);

     return {
         country_capital,
         country_name,
         currency,
         flagUrl,
     };
 };

 const getCountryFlag = async (name) =>{
     const response = await fetch(`https://restcountries.com/v2/name/${name}`);
     const [{flag}] = await response.json();

     return flag;
 };
const renderCountryInfo = async ()=>{
    const {country_capital, country_name, currency, flagUrl} = 
    await getCountryInfo();

    const card = document.createElement("div");
    const capitalElement = document.createElement("h4");
    const nameElement = document.createElement("h3");
    const currencyElement = document.createElement("p");
    const flagElement = document.createElement("img");

    capitalElement.innerText = country_capital;
    nameElement.innerText = country_name;
    currencyElement.innerText = currency;
    flagElement.src= flagUrl;
    card.classList.add("card");
    flagElement.classList.add("flag-img");

    card.append(capitalElement,nameElement, currencyElement, flagElement);
    container.append(card);

    
};

renderCountryInfo()

const form = document.getElementById("charachterForm");
const input = document.getElementById("charachterId");
const containerChar = document.getElementById("containerChar");
 
const getCharacter = async (id) =>{
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const character = await response.json();

    renderCharacter(character);
}

const getFilms = async(urls) =>{
    const requests = urls.map((url) => fetch(url));

    const responses = await Promise.all(requests);
    return Promise.all(responses.map((req) => req.json()));
};

const renderFilms = (container, films) =>{
    films.array.forEach((film) => {
        const nameElem = document.createElement("h5");
        nameElem.innerText = film.title;
        container.append(nameElem);
    });
};

const renderCharacter = ({name, films: filmUrls}) =>{
    const card = document.createElement("div");
    const nameElem = document.createElement("h4");
    const getFilmsButton = document.createElement("button");
    nameElem.innerText= name;
    card.classList.add("card");
    getFilmsButton.innerText = "films";
    getFilmsButton.addEventListener("click", async() => {
        const films = await getFilms(filmUrls);
        renderFilms(card, films)
    });
    card.append(nameElem, getFilmsButton);
    containerChar.append(card);
}

const handleSubmit = (event) =>{
    event.preventDefault();

    const id = input.value;
    getCharacter(id);
    containerChar.innerHTML = ""
}

form.addEventListener("submit", handleSubmit);



