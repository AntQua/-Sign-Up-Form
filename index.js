const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const passwordError = document.getElementById('password-error');
const phoneNumberField = document.getElementById('phoneNumber');
let validForm = false; 

confirmPasswordField.addEventListener('input', () => {
  if (confirmPasswordField.value === passwordField.value) {
    passwordError.textContent = '';
    confirmPasswordField.setCustomValidity('');
  } else {
    passwordError.textContent = '*Passwords do not match';
    confirmPasswordField.setCustomValidity('*Passwords do not match');
  }
});

passwordField.addEventListener('input', () => {
  passwordError.textContent = '';
  confirmPasswordField.setCustomValidity('');
});

phoneNumberField.addEventListener('input', () => {
  if (!/[^a-zA-Z]/.test(phoneNumberField.valid)) {
    validForm = true; 
  }
})

document.getElementById("submit-btn").addEventListener("click", (event) => {
  return validForm;
})
