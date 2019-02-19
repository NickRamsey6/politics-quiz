$(document).ready(function() {
  debugger;
  var height = parseInt(prompt("Please enter your height in inches"));

  if (height >= 60) {
    $('#over60').addClass("highlight");
  } else if (height < 60) {
    $('#under60').addClass("highlight");
  } else {
    heightChecker(height);

  }

  function heightChecker(height) {
    while ($.type(height) === NaN);
      var height = parseInt(prompt('Looks like you didn\'t type a number! Please enter a number'));
      if (height >= 60) {
        $('#over60').addClass("highlight");
      } else if (height < 60) {
        $('#under60').addClass("highlight");
      } else {
        heightChecker(height);
      }
  }
});
