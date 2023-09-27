function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validate () {
  var emailInput = document.getElementById('email');
  var errorMessage = document.querySelector('.error-message');
  if (!validateEmail(emailInput.value)) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please provide a valid email address';
    emailInput.classList.add('input-error');
  } else {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('input-error');
  }
}
