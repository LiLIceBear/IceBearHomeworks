// const products = [
//     {
//       name: "Iphone 12",
//       brand: "Apple",
//       price: 3200000,
//       properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
//     },
//     {
//       name: "Galaxy S20 Ultra",
//       brand: "Samsung",
//       price: 2900000,
//       properties: ["120 hz screen", "Water resistance"],
//     },
//     {
//       name: "MI 9",
//       brand: "Xiaomi",
//       price: 1300000,
//       properties: ["Best price", "Pay less - get more!"],
//     },
//   ];
// const renderList = (arr) => {
//   const list = document.createElement('ul');

//   arr.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = item;

//     list.append(listItem);
//   })

//   console.dir(list);
//   document.body.append(list)
// }

// const renderList = (arr) => {
//   const list = document.createElement('ul');

//   arr.forEach((item) => {
//     list.innerHTML += `<li>${item}</li>`
//   })

//   arr.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = item;

//     list.append(listItem);
//   })

//   console.dir(list);
//   document.body.append(list)
// }

// const renderList = (arr) => {
//     const list = document.createElement("ul");
  
//     const listHTML = arr.map((item) => `<li>${item}</li>`).join("");
  
//     console.log(`listHTML`, listHTML);
//     list.innerHTML = listHTML;
    // arr.forEach((item) => {
    //   const listItem = document.createElement('li');
    //   listItem.innerText = item;
  
    //   list.append(listItem);
    // })
  
//     console.dir(list);
//     document.body.append(list);
//   };

//   renderList(products);


  const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];


const listBody = "<div>";

products.forEach(product => {
    listBody = listBody + `<h1> ${product.name} </h1> <h2> ${product.brand}</h2>`;

    product.properties.forEach(property => {
        listBody = listBody + `<li>${property}</li>`;
    });
});

listBody = listBody + '</div>';

console.log(listBody);
document.getElementById('container').innerHTML = listBody;

//I ve tried so hard and got so far ;)
//    const createproductCard = (name, brand, properties) => {
//       const productContainer = document.createElement("div");
//       const nameElement = document.createElement("h2");
//       const brandElement = document.createElement("h3");
//       const propertiesContainer = document.createElement("ul");
//       const propertiesElement = document.createElement('li')
    
//       nameElement.innerText = name;
//       brandElement.innerText = brand;
//       propertiesElement.innerText = properties;
    
//       propertiesElement.forEach((properties) => {
//         const propertiesElement = document.createElement("li");
//         propertiesElement.innerText = properties;
    
//         propertiesContainer.append(propertiesElement);
//       })

//       productContainer.append(nameElement, brandElement, productContainer);
//   console.log(productContainer);

//   return productContainer;
// };

// createproductCard()
// console.dir(createproductCard);


//IT really works
const renderProducts = (productsList) =>{
    const container = document.createElement("div");

    productsList.forEach((prod) =>{

        const prodContainer = document.createElement("div");
        const prodTitle = document.createElement("h3");
        const prodSubtitle = document.createElement("h4");
        const prodPropertiesList= document.createElement("ul");

        prod.properties.forEach((prop) => {
            const listItem = document.createElement("li");
            listItem.innerText = prop;
            prodPropertiesList.append(listItem);
        });

        prodTitle.innerText = prod.name;
        prodSubtitle.innerText = prod.brand;

        prodContainer.append(prodTitle, prodSubtitle, prodPropertiesList);
        container.append(prodContainer);
    });

    document.body.append(container);

};

renderProducts(products);

