const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", loginFunction);

function loginFunction(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = loginForm;

  if (email.value === "" || password.value === "") {
    alert("Please fill in the login and/or password fields!");
  }

  let userData = {
    Login: email.value,
    Password: password.value,
  };

  console.log(userData);

  loginForm.reset();
}