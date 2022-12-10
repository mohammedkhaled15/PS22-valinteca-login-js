let userInput = document.getElementById("userInput");
let username = "";
let userReg = /^[a-zA-Z]{1}\w{3,13}[a-zA-Z]{1}$/g;
let userLabel = document.getElementById("userErrorMsg");
let userWarning =
  "username must be between 5-15 char only alphabetic numbers not allowed at the start or end";
let userValid = false;

let emailInput = document.getElementById("emailInput");
let email = "";
let emailReg =
  /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/g;
let emailLabel = document.getElementById("emailErrorMsg");
let emailWarning = "Not a valid email";
let emailValid = false;

let passwordInput = document.getElementById("passwordInput");
let password = "";
let passwordReg = /\w{8,}/g;
let passwordLabel = document.getElementById("passwordErrorMsg");
let passwordWarning = "Must be at least 8 characters";
let passwordValid = false;

let confPasswordInput = document.getElementById("confPasswordInput");
let password_confirmation = "";
let confPasswordLabel = document.getElementById("confPasswordErrorMsg");
let confPasswordWarning = "Must be same as password";
let confPasswordValid = false;

let submitForm = document.getElementById("createAccount");
let registerError = document.getElementById("registerError");

let formValid = false;

document.onload = () => {
  userInput.focus();
};

userInput.addEventListener("input", (e) => {
  username = e.target.value;
  if (username === "") {
    userValid = false;
    userLabel.textContent = "* Required";
  } else if (userReg.test(username)) {
    userValid = true;
    userLabel.innerHTML = "";
  } else if (!userReg.test(username)) {
    userValid = false;
    userLabel.textContent = userWarning;
  }
});

emailInput.addEventListener("input", (e) => {
  email = e.target.value;
  if (email === "") {
    emailValid = false;
    emailLabel.textContent = "* Required";
  } else if (emailReg.test(email)) {
    emailValid = true;
    emailLabel.innerHTML = "";
  } else if (!emailReg.test(email)) {
    emailValid = false;
    emailLabel.textContent = emailWarning;
  }
});

passwordInput.addEventListener("input", (e) => {
  password = e.target.value;
  if (password === "") {
    passwordValid = false;
    passwordLabel.textContent = "* Required";
  } else if (passwordReg.test(password)) {
    passwordValid = true;
    passwordLabel.innerHTML = "";
  } else if (!passwordReg.test(password)) {
    passwordValid = false;
    passwordLabel.textContent = passwordWarning;
  }
});

confPasswordInput.addEventListener("input", (e) => {
  password_confirmation = e.target.value;
  if (password_confirmation === "") {
    confPasswordLabel.textContent = "* Required";
  } else if (password === password_confirmation) {
    confPasswordValid = true;
    confPasswordLabel.textContent = "";
  } else {
    confPasswordValid = false;
    confPasswordLabel.textContent = confPasswordWarning;
  }
});

document.addEventListener("keyup", () => {
  formValid =
    userValid && confPasswordValid && passwordValid && confPasswordValid;
  if (formValid) {
    submitForm.classList.remove("disabled");
  } else {
    submitForm.classList.add("disabled");
  }
});

document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    sessionStorage.setItem("username", email);
    const data = { username, email, password, password_confirmation };
    const setting = {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        "https://goldblv.com/api/hiring/tasks/register",
        setting
      );
      if (response.status === 200) {
        window.location.href = "./../succeed/succeed.html";
        registerError.textContent = "";
      }
      console.log(response);
    } catch (error) {
      registerError.textContent = "Error from the server";
      return error;
    }
  });
