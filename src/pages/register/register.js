let userInput = document.getElementById("userInput");
let username = "";
let userReg = /^[a-zA-Z]{1}\w{3,13}[a-zA-Z]{1}$/g;
let userlabel = document.getElementById("userErrorMsg");

let emailInput = document.getElementById("emailInput");
let email = "";
let emailReg =
  /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
let emailLabel = document.getElementById("emailErrorMsg");

let passwordInput = document.getElementById("passwordInput");
let password = "";
let passwordReg = /\w{8,}/g;
let passwordLabel = document.getElementById("passwordLabel");

let confPasswordInput = document.getElementById("confPasswordInput");
let confPassword = "";
let confPasswordReg = /\w{8,}/g;
let confPasswordLabel = document.getElementById("confPasswordLabel");

let formValid;

document.onload = () => {
  userInput.focus();
};

userInput.addEventListener("", (e) => {
  username = e.target.value;
  // console.log(userReg.test(username));
  // username === "" ? (userlabel.textContent = "* Required") : null;
  if (userReg.test(username) === true) {
    // formValid = true;
    // userlabel.innerHTML = "";
    console.log("okkkk");
    // userInput.style.border = "none";
  } else {
    console.log("noooo");
    formValid = false;
    userlabel.textContent =
      "username must be between 5-15 char only alphabetic numbers not allowed at the start or end";
    // userInput.style.border = "1px solid red";
  }
});
userInput.onblur = () => {
  userInput.style.border = "none";
};
