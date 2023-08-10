function hamburger_menu() {
  if (document.getElementById("navlisID").classList.contains("closed")) {
    document.getElementById('navlisID').classList.remove('closed');
    console.log("Shift back to Page");
  } else {
    document.getElementById('navlisID').classList.add('closed');
    console.log("Shift to far left");
  }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  // Retrieve the input field values
  var firstName = document.getElementById('firstNameInput');
  var lastName = document.getElementById('lastNameInput');
  var email = document.getElementById('emailInput');
  var contactNumber = document.getElementById('contactNumberInput');
  var request = document.getElementById('requestInput');

  // Function to add error styles and messages to the input fields
  function setErrorStyles(field, message) {
    // Check if the error message element already exists
    var existingErrorMessage = field.parentNode.querySelector('.error-message');
  
    if (existingErrorMessage) {
      // If the error message element exists, update its text content
      existingErrorMessage.textContent = message;
    } else {
      // If the error message element does not exist, create a new one
      field.classList.add('error');
      var errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
      field.parentNode.appendChild(errorMessage);
    }
  }

  // Function to remove error styles and messages from the input fields
  function removeErrorStyles(field) {
    field.classList.remove('error');

    var existingErrorMessage = field.parentNode.querySelector('.error-message');
    if (existingErrorMessage) {
      existingErrorMessage.parentNode.removeChild(existingErrorMessage);
    }
  }

  // Check if the first name is empty
  if (firstName.value.trim() === '') {
    setErrorStyles(firstName, 'Please enter your first name');
  } else {
    removeErrorStyles(firstName);
  }

  // Validation for first name
  var firstNameCheck = /^[A-Za-z]+$/;
  if (!firstNameCheck.test(firstName.value)) {
    setErrorStyles(firstName, 'First name must contain only alphabetic characters.');
  } else {
    removeErrorStyles(firstName);
  }
 
  // Check if the last name is empty
  if (lastName.value.trim() === '') {
    setErrorStyles(lastName, 'Please enter your last name');
  } else {
    removeErrorStyles(lastName);
  }
 
  // Validation for last name 
  var lastNameCheck = /^[A-Za-z]+$/;
  if (!lastNameCheck.test(lastName.value)) {
    setErrorStyles(lastName, 'Last name must contain only alphabetic characters.');
  } else {
    removeErrorStyles(lastName);
  }

  // Validation for email format 
  var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailCheck.test(email.value)) {
    setErrorStyles(email, 'Please enter a valid email address.');
  } else {
    removeErrorStyles(email);
  }

  // Validation for contact number 
  var contactNumberCheck = /^\d+$/;
  if (!contactNumberCheck.test(contactNumber.value)) {
    setErrorStyles(contactNumber, 'Contact number must contain only numbers');
  } else {
    removeErrorStyles(contactNumber);
  }

  // Check if the request field is empty
  if (request.value.trim() === '') {
    setErrorStyles(request, 'Please describe your request');
  } else {
    removeErrorStyles(request);
  }

  // If all validations pass, log the form data
  console.log('Form data:');
  console.log('First Name:', firstName.value);
  console.log('Last Name:', lastName.value);
  console.log('Email:', email.value);
  console.log('Contact Number:', contactNumber.value);
  console.log('Request:', request.value);
});
