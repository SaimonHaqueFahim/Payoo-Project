document.getElementById('button-login').addEventListener('click', function (event) {
  event.preventDefault();

  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  console.log('Phone Number:', phoneNumber);
  console.log('Pin Number:', pinNumber);

  if (phoneNumber === '01924075318' && pinNumber === '1234') {
    console.log('Login successful, redirecting to home page');
    window.location.assign('home.html'); // Alternative redirect method
  } else {
    alert('Wrong phone number or pin.');
  }
});
