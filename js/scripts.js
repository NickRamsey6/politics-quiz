$(document).ready(function() {
  var age = parseInt(prompt("Please enter your age"));

  if (age >= 21) {
    $('#over21').show();
  } else if (age < 21) {
    $('#under21').show();
  } else {
    var age = parseInt(prompt('Looks like you didn\'t type a number! Please enter a number'));
    if (age >= 21) {
      $('#over21').show();
    } else if (age < 21) {
      $('#under21').show();
    }
  }
});
