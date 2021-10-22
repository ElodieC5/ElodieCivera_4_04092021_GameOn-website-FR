// NAV Responsive = Icon (screen & max-width 768px) vs Menu
// -----------------------------------------------------
// when click on the icon => add "responsive" as a class => menu appears

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements & RegEx
// -----------------------------------------------------
// modalbg: modal bckg, modalBtn: 2 btn to launch
// formData: div with inputs, span: (x) to close

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formDataList = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const userInputs = document.querySelectorAll("input");
const locationElts = document.querySelectorAll("input[name='location']");
const submit = document.querySelector(".btn-submit");
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
const regDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const regNumber = /^\d+$/;
let participation;


// MODAL Launch & Close
// -----------------------------------------------------

function launchModal() {
  modalbg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function closeModal() {
  modalbg.style.display = "none";
  document.querySelector("form").reset();
}

close.addEventListener("click", closeModal);


// FORM validation
// -----------------------------------------------------
// when form is sumitted, each user's input is checked & customized error message eventually pop-up

submit.addEventListener("click", checkInput);

// value of the "data-error" attribute is the error message, the error class prevents the final validation

function setErrorMessage(input, message) {
  input.parentElement.setAttribute("data-error", message);
  input.parentElement.setAttribute("data-error-visible", "true");
  input.parentElement.classList.add("error");
  
}

// no message when everything is fine, remove the "error" class in case it has been corrected afterwards

function setSuccessMessage(input) {
  input.parentElement.removeAttribute("data-error");
  input.parentElement.removeAttribute("data-error-visible");
  input.parentElement.classList.remove("error");
  
}

// prevent submitting while inputs are validated

function checkInput(e) {
  e.preventDefault();

// each input is switched as per its name and then its value is checked

  userInputs.forEach(input => {
    let inputName = input.name;
    let inputValue = input.value;
  
// if value does not match validation requirement then call function setErrorMessage
// else call setSuccessMessage

    switch (inputName) {

  case "first" :
    if (inputValue.length < 2) {
      setErrorMessage(input, "Veuillez entrer au moins 2 caractères");
    } else {
        setSuccessMessage(input);
    }
    break;

  case "last" :
    if (inputValue.length < 2) {
      setErrorMessage(input, "Veuillez entrer au moins 2 caractères");
    } else {
        setSuccessMessage(input);
    }
    break;

  case "email" :
    if (!regEmail.test(inputValue)) {
      setErrorMessage(input, "Veuillez vérifier votre adresse e-mail");
    } else {
        setSuccessMessage(input);
    }
    break;

  case "birthdate" :
    if (!regDate.test(inputValue)) {
      setErrorMessage(input, "Veuillez vérifier votre date de naissance");
    } else {
        setSuccessMessage(input);
    }
    break;

  case "quantity" :
    let a = Number(inputValue);
    participation = a;
    if (!regNumber.test(a) || Number(a) > 99 || inputValue ==="") {
      setErrorMessage(input, "Combien de fois avez-vous participé ?");
    } else {
        setSuccessMessage(input);
    }
    break;

  case "location" :
    let checkboxChecked = 0;
    locationElts.forEach(locationElt => {
      if (locationElt.checked) {
        checkboxChecked++;
      }
    });

    if (checkboxChecked > 0 && participation > 0) {
      setSuccessMessage(input);
    } else if (checkboxChecked === 0 && participation === 0) {
      setSuccessMessage(input);
    } else if (checkboxChecked > 0 && participation === 0) {
      setErrorMessage(input, "Si c'est votre 1ère participation, ne cochez rien");
    } else {
          setErrorMessage(input, "Veuillez préciser dans quelle ville");
    }
    break;

    case "cgu" :
      if (input.checked) {
        setSuccessMessage(input);
      } else {
        setErrorMessage(input, "Veuillez accepter nos conditions d'utilisation");
      }
    }
  });

// final loop checking no uncorrected error remaining and form validation

let ilYaUneErreur = 0;
  formDataList.forEach(formData => {
    if (formData.classList.contains("error")) {
      ilYaUneErreur++;
    }
  });

if (ilYaUneErreur === 0) {
  alert ("Votre formulaire a bien été enregistré. Vous recevrez un e-mail de confirmation sous 24 heures. Merci !");
  closeModal(); 
}
  }
