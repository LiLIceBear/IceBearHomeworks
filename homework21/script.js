const board = document.getElementById("board");
const form = document.getElementById("board-form");
const itemTypeSelect = document.getElementById("item-type");
const itemID = document.getElementById("item-id");
const sbTBtn = document.getElementById("btn");
const preloader = document.getElementById("preloader");

class Card{
    constructor(){
        this.card = document.createElement("div");
    }

    render(container){
        this.card.classList.add("card");
        const deleteBTN = document.createElement("span");
        deleteBTN.innerText = "x";
        deleteBTN.classList.add("card-delete-btn");
        deleteBTN.addEventListener("click", () => {
            this.delete()
        })

        this.card.append(deleteBTN);
        container.append(this.card);
    }

    delete(){
        this.card.remove();
    }
};

class StarshipCard extends Card {
    constructor(options){
        super();
        const{
            name,
            model,
            manufacturer,
            max_atmospheric_speed: maxSpeed,
        } = options;
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.maxSpeed = maxSpeed;
    }

    render(container){
        const nameElement = document.createElement("h5");
        const modelName = document.createElement("h4");
        const maxSpeedElement = document.createElement("p");
        const manufacturerElement = document.createElement("p");

        nameElement.innerText = this.name;
        modelName.innerText = this.model;
        maxSpeedElement.innerText = this.maxSpeed;
        manufacturerElement.innerText = this.manufacturer;

        this.card.append(
            nameElement,
            modelName,
            maxSpeedElement,
            manufacturerElement,
        )
        super.render(container);
    }
};

class VehicleCard extends Card {
    constructor(options){
        super();
        const{
            name,
            model,
            manufacturer,
            max_atmospheric_speed: maxSpeed,
        } = options;
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.maxSpeed = maxSpeed;
    }

    render(container){
        const nameElement = document.createElement("h5");
        const modelName = document.createElement("h4");
        const maxSpeedElement = document.createElement("p");
        const manufacturerElement = document.createElement("p");

        nameElement.innerText = this.name;
        modelName.innerText = this.model;
        maxSpeedElement.innerText = this.maxSpeed;
        manufacturerElement.innerText = this.manufacturer;

        this.card.append(
            nameElement,
            modelName,
            maxSpeedElement,
            manufacturerElement,
        )
        super.render(container);
    }
};

class PlanetCard extends Card {
    constructor(options){
        super();
        const{ name, climate, terrain, population} = options;
        this.name = name;
        this.population = population;
        this.terrain = terrain;
        this.climate = climate;
    }

    render(container){
        const nameElement = document.createElement("h4");
        const climateElement = document.createElement("p");
        const populationElement = document.createElement("p");
        const terrainElement = document.createElement("p");

        nameElement.innerText = this.name;
        climateElement.innerText = this.climate;
        populationElement.innerText = this.population;
        terrainElement.innerText = this.terrain;

        this.card.append(
            nameElement,
            climateElement,
            populationElement,
            terrainElement,
        )
        super.render(container);
    }
};

class API{
    constructor(){
        this.baseUrl = "https://swapi.dev/api";
    }

    async sendRequest(url){
        const response  = await fetch(url);
        if(!response.ok){
            throw new Error(`Code ${response.status}`);
        }
            const result = await response.json();
            return result;
        }
};

getStarship = async(id) => {
const starship = await this.sendRequest(`${baseUrl}/starship${id}`);
return starship;
};

getVeichle = async(id) => {
const vehicle = await this.sendRequest(`${baseUrl}/vehicle${id}`);
return vehicle;
    };

getPlanet = async(id) => {
 const planet = await this.sendRequest(`${baseUrl}/planet${id}`);
 return planet;
        };
    


const api = new API();
const API_MAP = {
    starship: API.getStarship,
    planet: API.getPlanet,
    vehicle:API.vehicle,
};

const CARD_MAP = {
    starship: StarshipCard,
    planet: PlanetCard,
    vehicle: VehicleCard,
};

const handleSubmit = async(e) =>{
e.preventDefault();
const type = itemTypeSelect.value;
const input = itemID.value;

sbTBtn.setAttribute("disabled", "");
preloader.style.display = "inline-block";

try{
    const item = await API_MAP[type](id);
    const card = new CARD_MAP[type](item);
    card.render(board);
}
catch(err){
    alert("not found");
}

sbTBtn.setAttribute("disabled", "");
preloader.style.display = "none";
};



form.addEventListener("submit", handleSubmit);

