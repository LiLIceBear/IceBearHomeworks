const formConfig = [
    {
      element: "text",
      name: "login",
      label: "Логин",
    },
    {
      element: "text",
      name: "age",
      label: "Возраст",
    },
    {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
        {
          text: "JavaScript",
          value: "js",
        },
        {
          text: "Java",
          value: "java",
        },
        {
          text: "Python",
          value: "python",
        },
      ],
    },
  ];


//create form

const createFields = (config) =>{

    return config.map((fieldConfig) => {
        const  wrapper = document.createElement("div");
        const label = document.createElement("label");
        label.setAttribute("for", fieldConfig.name);
        label.innerText = fieldConfig.label;
        let element;

        switch (fieldConfig.element) {
            case "text":
                element = document.createElement("input");
                element.setAttribute("type", "text");

                element.setAttribute("id", fieldConfig.name);
                element.setAttribute("name", fieldConfig.name);

                break;

             case "select":
                    element = document.createElement("select");
                    fieldConfig.options.forEach((opt) =>{
                        const option  = document.createElement("option");
                        option.innerText = opt.text;
                        option.setAttribute("value", opt.value)

                        element.append(option);
                    } )
    
                    break;
        
            default:
                break;


        }
        wrapper.append(label, element);
        return wrapper
    }
    )}

const handleSubmit= (evt) =>{
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = convertFromDataToObject(formData);

    console.log(data); 

}

const convertFromDataToObject = (formData) =>{
    const data = {};
    for(const pair of formData.entries()){
        data[pair[0]] = pair[1];
    }

    return data
}

const form = document.createElement("form");
// get the array of fields
const fields = createFields(formConfig);
fields.forEach((item) => {
    form.append(item)
});




//add button to the form

const sbmButton = document.createElement('button');
sbmButton.setAttribute("type", "submit");
sbmButton.innerText = "Submit";
form.append(sbmButton);

//add form to the document body
document.body.append(form);

//add event listener to the form
form.addEventListener("submit", handleSubmit)















// //create a form container
// function bodyButton(){
//     let loginForm  = document.createElement('form');
//     loginForm.setAttribute("method", "post");
//     loginForm.setAttribute("action", "submit.php");
  
//   //create an input for Login
//     let loginInput = document.createElement('input');
//     loginInput.setAttribute("type", "text");
//     loginInput.setAttribute("name", "login");
//     loginInput.setAttribute("placeholder", "login");
  
//     //an input for age
//     let ageInput = document.createElement("input");
//     ageInput.setAttribute("type", "text");
//     ageInput.setAttribute("name", "age");
//     ageInput.setAttribute("placeholder", "age");
  
//     //create a select form
//     //create options input

//     // create submit button
  
//     let button = document.createElement("button");
//     button.setAttribute("action", "submit");
  
//     loginForm.appendChild("input");
//     loginForm.appendChild("input");
//     loginForm.appendChild("button");

//     document.getElementsByTagName("body")[0].appendChild("loginForm");
// }
// result = bodyButton()
// console.log(result);

//   var select = document.querySelector("select");
//   var output = document.querySelector("#output");
//   select.addEventListener("change", function() {
//     var number = 0;
//     for (var i = 0; i < select.options.length; i++) {
//       var option = select.options[i];
//       if (option.selected)
//         number += Number(option.value);
//     }
//     output.textContent = number;
//   });
 