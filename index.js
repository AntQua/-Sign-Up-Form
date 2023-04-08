const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const passwordError = document.getElementById('password-error');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const emailField = document.getElementById('email');
const phoneNumberField = document.getElementById('phoneNumber');
const submitBtn = document.getElementById('submit-btn');

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

function validateForm(event) {
  // Prevent the form from submitting normally
  //event.preventDefault();

  // Get the values of the input fields
  const firstNameValue = firstNameField.value;
  const lastNameValue = lastNameField.value;
  const emailValue = emailField.value;
  const phoneNumberValue = phoneNumberField.value;
  const passwordValue = passwordField.value;
  const confirmPasswordValue = confirmPasswordField.value;

  // Validate the inputs
  if (
    firstNameValue &&
    lastNameValue &&
    emailValue &&
    phoneNumberValue &&
    passwordValue &&
    confirmPasswordValue
  ) {
    alert('Form submitted successfully! \nWe are looking forward in getting in contact with you!');
  } else {
    alert('Please fill in all required fields.');
  }
}

submitBtn.addEventListener('click', validateForm);
