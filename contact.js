// contact.js
const form = document.getElementById('contactForm');
const inputs = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  subject: document.getElementById('subject'),
  message: document.getElementById('message'),
};
const errors = {
  name: document.getElementById('error-name'),
  email: document.getElementById('error-email'),
  subject: document.getElementById('error-subject'),
  message: document.getElementById('error-message'),
};
const success = document.getElementById('success');

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function clearErrors() {
  Object.values(errors).forEach(e => {
    e.hidden = true;
    e.textContent = '';
  });
  success.hidden = true;
}

function focusFirstError() {
  for (const field of ['name','email','subject','message']) {
    if (!errors[field].hidden) {
      inputs[field].focus();
      return;
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const values = {
    name: inputs.name.value.trim(),
    email: inputs.email.value.trim(),
    subject: inputs.subject.value.trim(),
    message: inputs.message.value.trim(),
  };

  let valid = true;

  if (!values.name) {
    errors.name.textContent = 'Full name is required.';
    errors.name.hidden = false;
    inputs.name.setAttribute('aria-describedby', 'error-name');
    valid = false;
  }

  if (!values.email) {
    errors.email.textContent = 'Email is required.';
    errors.email.hidden = false;
    inputs.email.setAttribute('aria-describedby', 'error-email');
    valid = false;
  } else if (!validateEmail(values.email)) {
    errors.email.textContent = 'Enter a valid email like name@example.com.';
    errors.email.hidden = false;
    inputs.email.setAttribute('aria-describedby', 'error-email');
    valid = false;
  }

  if (!values.subject) {
    errors.subject.textContent = 'Subject is required.';
    errors.subject.hidden = false;
    inputs.subject.setAttribute('aria-describedby', 'error-subject');
    valid = false;
  }

  if (!values.message) {
    errors.message.textContent = 'Message is required.';
    errors.message.hidden = false;
    inputs.message.setAttribute('aria-describedby', 'error-message');
    valid = false;
  } else if (values.message.length < 10) {
    errors.message.textContent = 'Message must be at least 10 characters.';
    errors.message.hidden = false;
    inputs.message.setAttribute('aria-describedby', 'error-message');
    valid = false;
  }

  if (!valid) {
    focusFirstError();
    return;
  }

  // Success: show confirmation (replace with real submission as needed)
  success.hidden = false;
  success=window.alert('Thanks — your message was sent!');
  form.reset();
  // ensure screen readers notice success
//   success.setAttribute('tabindex','-1');
//   success.focus();
}); 