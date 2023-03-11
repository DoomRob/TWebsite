// Constants
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#emailAddress');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('#fullName + .field-error');
const emailError = document.querySelector('#emailAddress + .field-error');
const messageError = document.querySelector('#story + .field.error');

function validateName() {
  // Code that will validate the Name
  if(nameInput.validity.valid){
     nameError.textContent = '';
  }
  else {
     showNameError();
  }
}

function showNameError() {
    // An error message should appear that the fullName field is entered wrong
    nameError.textContent = 'Please enter your name';
}

function validateEmail() {
    // Code that will run whenever we want to validate the email field
    if(emailInput.validity.valid){
        emailError.textContent = '';
    }
    else {
        showEmailError();
    }
}

function showEmailError() {
    // Code to display an error message for the email field
    if(emailInput.validity.valueMissing){
        emailError.textContent = 'Please enter your email address'
    }
    else if(emailInput.validity.typeMismatch){
        emailError.textContent = 'Your email address does not appear to be correct'
    }
}


function validateMessage() {
    // Code to display an error message for the message field
    if(messageInput.validity.valid) {
        messageInput.textContent = 'Please enter your message';
    }
    else {
        showMessageError();
    }
}

function showMessageError() {
    messageError.textContent = 'Please enter a message';
}

function validateForm(event) {
    // This code is used to validate the entire form
    let formHasErrors = false;

    if(!nameInput.validity.valid) {
        formHasErrors = true;
        showNameError();
    }

    if(!emailInput.validity.valid) {
        formHasErrors = true;
        showEmailError();
    }

    if(!messageInput.validity.valid) {
        formHasErrors = true;
        showMessageError();
    }

    if(formHasErrors) {
        event.preventDefault();
    }
}

// Event listener
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);
form.addEventListener('submit', validateForm);
