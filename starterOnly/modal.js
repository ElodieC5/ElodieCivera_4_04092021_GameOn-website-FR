// NAV Responsive with icon for screen & max-width 768px
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// modalbg: bckg form, modalBtn: btn to launch, formData: inputs, span: (x) to close
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const span = document.getElementsByClassName("close")[0];

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbg.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
}

// API validation of each form-data
//document.querySelector('.form input[type="button"]').addEventListener("click", function() {
  //for (let input of document.querySelectorAll(".form input, .form textarea")) {
  //  input.setCustomValidity(adaptmessage) => fo;
  //}
//})
