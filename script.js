// Get references for elements
const showRegisterForm = document.getElementById("show-register-form");
const showLoginForm = document.getElementById("show-login-form");
const formsWrapper = document.getElementsByClassName("forms-wrapper");
const overlay = document.getElementsByClassName("overlay");

// Slide elements
showRegisterForm.addEventListener("click", () => {
  overlay[0].classList.remove("overlay-slide-left");
  formsWrapper[0].classList.remove("forms-wrapper-slide-right");
  overlay[0].classList.add("overlay-slide-right");
  formsWrapper[0].classList.add("forms-wrapper-slide-left");
});
showLoginForm.addEventListener("click", () => {
  formsWrapper[0].classList.remove("forms-wrapper-slide-left");
  formsWrapper[0].classList.add("forms-wrapper-slide-right");
});
