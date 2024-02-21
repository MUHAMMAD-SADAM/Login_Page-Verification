//Email verification
function validateEmail(email) {
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    emailError.textContent = "Email is required.";
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email address.";
  } else {
    emailError.textContent = "";
  }
}

// password verification
function togglePassword() {
  const pass = document.getElementById("pass");
  const check = document.getElementById("check");

  if (pass.type === "password") {
    pass.type = "text";
    check.classList.remove("fa-eye");
    check.classList.add("fa-eye-slash");
  } else {
    pass.type = "password";
    check.classList.remove("fa-eye-slash");
    check.classList.add("fa-eye");
  }
}
