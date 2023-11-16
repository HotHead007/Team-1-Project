function validateForm() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var passwordError = document.getElementById("passwordError");

  if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match!";
    return false;
  } else {
    passwordError.textContent = "";
    console.log(true);
    return true;
  }
}
