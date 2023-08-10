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
    
    var existingErrorMessage = field.parentNode.querySelector('.error-message');
  
    if (existingErrorMessage) {
      
      existingErrorMessage.textContent = message;
    } else {
      
      field.classList.add('error');
      var errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
      field.parentNode.appendChild(errorMessage);
    }
  }
  // Function to remove error styles and messages from the input fields
  function removeErrorStyles(field) {
    var errorFields = document.querySelectorAll('.error');
    errorFields.forEach(function (field) {
      field.classList.remove('error');
    });

    var errorMessages = field.parentNode.querySelectorAll('.error-message');
    errorMessages.forEach(function (message) {
      message.parentNode.removeChild(message);
    });
  }
   // Check if the first name is empty
   if (firstName.value.trim() === '') {
    setErrorStyles(firstName, 'Please enter your first name');
   }
   // Validation for first name
   var firstNameCheck = /^[A-Za-z]+$/;
   if (!firstNameCheck.test(firstName.value)) {
     setErrorStyles(firstName, 'First name required.');
     
   }
 

  // Check if the last name is empty
  if (lastName.value.trim() === '') {
    setErrorStyles(lastName, 'Please enter your last name');
    
  }
 
  // Validation for last name 
  var lastNameCheck = /^[A-Za-z]+$/;
  if (!lastNameCheck.test(lastName.value)) {
    setErrorStyles(lastName, 'Last name required.');
    
  }

  // Validation for email format 
  var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailCheck.test(email.value)) {
    setErrorStyles(email, 'Please enter a valid email address.');
    
  }

  // Validation for contact number 
  var contactNumberCheck = /^\d+$/;
  if (!contactNumberCheck.test(contactNumber.value)) {
    setErrorStyles(contactNumber, 'Contact number must contain only numbers');
    
  }
   // Check if the request field is empty
   if (request.value.trim() === '') {
    setErrorStyles(request, 'Please describe your request');
    return;
  }
  
  console.log('Form data:');
  console.log('First Name:', firstName.value);
  console.log('Last Name:', lastName.value);
  console.log('Email:', email.value);
  console.log('Contact Number:', contactNumber.value);
  console.log('Request:', request.value);

});

