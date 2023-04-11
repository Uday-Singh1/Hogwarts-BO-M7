// JavaScript-code
var myInput = document.getElementById('myInput');
var myButton = document.getElementById('myButton');

myInput.addEventListener('input', function() {
  if (myInput.value.length > 0) {
    myButton.removeAttribute('disabled');
  } else {
    myButton.setAttribute('disabled', true);
  }
});

myButton.addEventListener('click', function() {
  if (myInput.value.length > 0) {
    var url = 'http://127.0.0.1:5500/'; // Vervang met de gewenste URL
    window.location.href = url; // Redirect naar de gewenste URL
  }
});