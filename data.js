const form = document.getElementById('form');
const inputData = document.querySelector('input');
    
    //  creating id function to select all id element
let id = (id) => document.getElementById(id);

let userName = id("name"),
    email = id("email"),
    phone = id("phone");


let classes = (classes) => document.getElementsByClassName(classes);

let errorMsg = classes("error-massage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

   
    formValidat(userName, 0,"Username field is required")
    formValidat(email, 1,"Email field is required")
    formValidat(phone, 2,"Tel field is required")
    
   
});

 function formValidat (id, serial, massage) {
    if (id.value === "") {
        errorMsg[serial].innerHTML = massage;
        // inputData.style.borderColor = "1px solid red";
    } else {
        errorMsg[serial].innerHTML = "";
        setTimeout(function(formValidat) {window.location.href="step2.html";}, 1000)
    }
        
};
