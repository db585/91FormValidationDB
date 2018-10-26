// Event listeners
document.querySelector('#name').addEventListener('blur', validateName)
document.querySelector('#zipcode').addEventListener('blur', validateZipcode)
document.querySelector('#email').addEventListener('blur', validateEmail)
document.querySelector('#phone').addEventListener('blur', validatePhone)

function validateName () {
  const name = document.querySelector('#name')

  // Regex starts with letters and from 2 to 10 characteres long.
  // ^ - start with smth. $ - ends with smth
  const re = /^[a-zA-Z]{2,10}$/

  if (!re.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }
}

function validateZipcode () {
  const zipcode = document.querySelector('#zipcode')

  // Regex for US zipcode. Start with digits. Five digits long. Optional - after 5 digits could be 4 digits
  // () means group and ? at the end means that it is optional
  const re = /^[0-9]{5}(-[0-9]{4})?$/

  if (!re.test(zipcode.value)) {
    zipcode.classList.add('is-invalid')
  } else {
    zipcode.classList.remove('is-invalid')
  }
}

function validateEmail () {
  const email = document.querySelector('#email')

  // Regex for email.
  // Letters and digits, underscore, dash, dot till @
  // Letters and digits, underscore, dash, dot after @ but before domain dot
  // 5 letters for global domain name (Brad said max 5)
  // () means group
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  if (!re.test(email.value)) {
    email.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
  }
}

function validatePhone () {
  const phone = document.querySelector('#phone')

  // Regex for phone number.
  // (123)456-7890
  // 1234567890
  // 123.456.7890

  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid')
  } else {
    phone.classList.remove('is-invalid')
  }
}
