const containerSignUp = document.getElementsByClassName("container");
const submitButton = document.getElementById("submit-button");
const emailField = document.getElementsByClassName("email");
const successForm = document.getElementsByClassName("success-container");
const userEmail = document.getElementById("user-email");
const dismissButton = document.getElementById("dismiss-button");
const invalidEmailLabel = document.getElementsByClassName(
  "invalid-email-label"
);

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailField[0].value.trim();
  if (validateEmail(email)) {
    emailField[0].classList.remove("invalid-email");
    invalidEmailLabel[0].classList.add("hide");
    containerSignUp[0].classList.add("hide");
    successForm[0].classList.remove("hide");
    emailField[0].value = "";
    userEmail.innerHTML = email;
  } else {
    emailField[0].classList.add("invalid-email");
    invalidEmailLabel[0].classList.remove("hide");
  }
});

dismissButton.addEventListener("click", (event) => {
  emailField[0].classList.remove("invalid-email");
  invalidEmailLabel[0].classList.add("hide");
  containerSignUp[0].classList.remove("hide");
  successForm[0].classList.add("hide");
  emailField[0].value = "";
});
