const myForm = document.querySelector(".input_form");
const emailInput = document.querySelector("#email");
const errorMsg = document.querySelector(".error_msg");

function showError(message){
  emailInput.classList.add("error");
  errorMsg.classList.remove("visually-hidden");
  errorMsg.textContent = message;
  emailInput.placeholder = "example@email.com";
}

function removeError(){
  emailInput.classList.remove("error");
  errorMsg.classList.add("visually-hidden");
}

function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleError(){
  const email = emailInput.value.trim();
  if (email === ""){
    let msg = "Whoops! It looks like you forgot to add your email";
    showError(msg);
  }
  else if (!isValidEmail(email)){
    let msg = "Please provide a valid email adress";
    showError(msg);
  }
  else {
    removeError();
  }
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleError();
})

emailInput.addEventListener("focus", () => removeError());
emailInput.addEventListener("blur", handleError);