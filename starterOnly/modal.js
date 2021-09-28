// NAV Responsive with icon for screen & max-width 768px
// -----------------------------------------------------

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// -----------------------------------------------------
// modalbg: bckg form, modalBtn: btn to launch, formData: inputs, span: (x) to close

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const userInputs = document.querySelectorAll("input");
const submit = document.querySelector(".btn-submit");
const prenom = document.getElementById("first");
const regEmail =/^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$/



// MODAL launch & close
// -----------------------------------------------------

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.addEventListener("click", closeModal);

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// FORM validation
// -----------------------------------------------------

submit.addEventListener("click", checkInput);

function setErrorMessage(input, message) {
  input.parentElement.setAttribute("data-error", message);
  input.parentElement.setAttribute("data-error-visible", "true");
  
}

function setSuccessMessage(input) {
  input.parentElement.removeAttribute("data-error");
  input.parentElement.removeAttribute("data-error-visible");
  
}

function checkInput(e) {
  e.preventDefault();

  userInputs.forEach(input => {
    let inputName = input.name;
    let inputValue = input.value;
  
    switch (inputName) {

  case "first" :
    if (inputValue.length < 2) {
      setErrorMessage(input, "Veuillez entrer au moins 2 caractères pour votre prénom.");
    } else {
        setSuccessMessage(input);
    }
    break;
  case "last" :
    if (inputValue.length < 2) {
      setErrorMessage(input, "Veuillez entrer au moins 2 caractères pour votre nom.");
    } else {
        setSuccessMessage(input);
    }
    break;
  case "email" :
    if (!inputValue.match(regEmail)) {
      setErrorMessage(input, "Veuillez vérifier votre adresse e-mail");
    } else {
        setSuccessMessage(input);
    }
    break;
  case "birthdate" :
    if ( inputValue.length ) {
      // console.log(birthdate);
    } else {
          // console.log(birthdate +"else");
    }
    break;
  case "quantity" :
    if ( inputValue.length ) {
      // console.log(quantity);
    } else {
          // console.log(quantity +"else");
    }
    break;
  case "location" :
    if ( inputValue.length ) {
      // console.log(location);
    } else {
          // console.log(location +"else");
    }
    break;
    }
  });
}



















// formData.forEach(div => {
//   div.setAttribute("data-error", "vous avez une erreur");
//   div.setAttribute("data-error-visible", "true");
// }) 

// let email = document.getElementById("email");
// email.parentElement.setAttribute("data-error", "vous avez une erreur");
// email.parentElement.setAttribute("data-error-visible", "true");




// formData.forEach((div) =>
// // formData.forEach((div) => div.set
// // console.log(formData[3]);



// formData.forEach(function(div){
//   // console.log(div);
// })

// formData.forEach((div) => {
//   // console.log(div);

// })

// formData.forEach(div => {
//   div.setAttribute("data-error", "");
//   div.setAttribute("data-error-visible", "true");
// }) 


// formData.forEach(div => console.log(div));


