document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    document.getElementById('formMessage').innerText = 'All fields are required!';
    document.getElementById('formMessage').style.color = 'red';
  } else if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('formMessage').innerText = 'Please enter a valid email!';
    document.getElementById('formMessage').style.color = 'red';
  } else {
    document.getElementById('formMessage').innerText = 'Message sent successfully!';
    document.getElementById('formMessage').style.color = 'green';
    this.reset();
  }
});
