const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const passwordError = document.getElementById('password-error');

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
