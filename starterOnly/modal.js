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

// DOM Elements & RegEx
// -----------------------------------------------------
// modalbg: bckg form, modalBtn: btn to launch, formData: inputs, span: (x) to close

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formDatas = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const userInputs = document.querySelectorAll("input");
const locationEls = document.querySelectorAll("input[name='location']");
const submit = document.querySelector(".btn-submit");
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const regNumber = /^[0-9]\d*$/;
let participation;


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


/* let birth = document.getElementById("birthdate");

birth.addEventListener("click", checkAge); */


function setErrorMessage(input, message) {
  input.parentElement.setAttribute("data-error", message);
  input.parentElement.setAttribute("data-error-visible", "true");
  input.parentElement.classList.add('erreur');
  
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
/*       function checkAge(value) {
        let now = new Date();
        let birthDate = new Date(value);
        let nowYear = now.getFullYear();
        let birthYear = birthDate.getFullYear();
        let minYear = nowYear - 10;
        let maxYear = nowYear - 110;
    
        if (birthYear > minYear || birthYear < maxYear) {
          return false;
        } else {
          return true;
        }
      }
    if (checkAge(inputValue) === false) {
      setErrorMessage(input, "L'âge minimun pour pouvoir participer est de 10 ans");
    } else {
        setSuccessMessage(input);
    } */
    break;
  case "quantity" :
    let a = Number(inputValue);
    participation = a;
    if (!regNumber.test(a) || Number(a) > 99) {
      setErrorMessage(input, "Merci de vérifier le nombre de vos précédentes participations");
    } else {
        setSuccessMessage(input);
    }
    break;
  case "location" :
    let checkboxChecked = 0;

    locationEls.forEach(locationEl => {
      if (locationEl.checked) {
        checkboxChecked++;
      }
    });

    if (checkboxChecked > 0 && participation > 0) {
      setSuccessMessage(input);
    } else if (checkboxChecked === 0 && participation === 0) {
      setSuccessMessage(input);
    } else {
          setErrorMessage(input, "Merci d'indiquer dans quelle ville vous avez participé");
    }
    break;

    case "cgu" :
      if (input.checked) {
        setSuccessMessage(input);
      } else {
        setErrorMessage(input, "Merci d'accepter nos CGU");
      }
    }


  });
 let ilYaUneErreur = 0;
  formDatas.forEach(formData => {
    if (formData.classList.contains("erreur")) {
      ilYaUneErreur++;
    }
  })
  if(ilYaUneErreur === 0){
    alert('votre formulaire a bien été');
    closeModal();
  }

}

//     locationEls.forEach(function isChecked(locationEl) {
//       if (locationEl.checked) {
//         checkboxChecked++;
//       };
// });


// locationEls.forEach(function (locationEl){
//   if (locationEl.checked) {
//     checkboxChecked++;
//   }
// });


// //() => {} // fonction flecher && arrow function
// locationEls.forEach((locationEl) => {
//   if (locationEl.checked) {
//     checkboxChecked++;
//   }
// });

// quand il y a un seul param pas besoin de parenthe ()
// locationEls.forEach(locationEl => {
//   if (locationEl.checked) {
//     checkboxChecked++;
//   }
// });

// divEls.forEach(divEl => divEl.addEventListener('click', () => console.log("coucou")));



//     // let checkboxChecked = 0;

//     // for (let i = 0; i < locationEls.length; i++) {
//     //   if (locationEls[i].checked) {
//     //     checkboxChecked++;
//     //   }
//     // }
   


// let divEls = document.querySelectorAll('div');


// divEls.forEach(divEl => {
//   divEl.addEventListener('click', () => {
//     console.log("coucou");
// })
// });


// // lorsque il y a une instruction pas besoin d'accolade
// divEls.forEach(divEl => divEl.addEventListener('click', () => console.log("coucou")));



// addEventListener('keyup', function(){

// })

// dEventListener('keyup', () =>{
  
// })

// dEventListener('keyup', isCheked)





// let bonjour = true;


// if (bonjour) console.log('il ma dit bonjour');
// else console.log('il ma pas dit bonjour');
