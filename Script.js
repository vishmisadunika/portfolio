const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    formMessage.textContent = 'Please fill out all required fields.';
    formMessage.style.color = 'red';
    return;
  }

  // Basic email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    return;
  }

  // If all good
  formMessage.textContent = 'Thank you for your message, ' + name + '! I will get back to you soon.';
  formMessage.style.color = 'green';

  // Clear form
  form.reset();
});

