let username = "";
let userInput = document.getElementById("userInput");
let label = document.getElementById("userErrorMsg");

document.onload = () => {
  userInput.focus();
};

let userReg = /^[a-zA-Z]{1}\w{3,13}[a-zA-Z]{1}$/g;

userInput.addEventListener("input", (e) => {
  username = e.target.value;
  if (userReg.test(username)) {
    label.textContent = "accepted";
    userInput.style.border = "1px solid green";
  } else {
    label.textContent =
      "username must be between 5-15 char only alphabetic numbers not allowed at the start or end";
    userInput.style.border = "1px solid red";
  }
});
userInput.onblur = () => {
  userInput.style.border = "none";
};
