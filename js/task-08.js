const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", loginFunction);

function loginFunction(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = loginForm;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in the login and/or password fields!");
  }

  let userData = {
    userEmail: email.value,
    userPassword: password.value,
  };

  console.log(`Login: ${userData.userEmail}, Password: ${userData.userPassword}`);

  loginForm.reset();
}