//setting variables-linking to HTML
var currentDayE1 = $('#currentDay');
var currentTimeE1 = $('#currentTime');

//Function called to render page so that code only runs after page has loaded
window.onload = function() {
  nineAM();
  tenAM();
  elevenAM();
  twelvePM();
  onePM();
  twoPM();
  threePM();
  fourPM();
  fivePM();
};

// function to display date and time at the top of the page
function displayTime() {
var currentDay = dayjs().format('dddd MMMM DD, YYYY');
currentDayE1.text(currentDay);
console.log(currentDay);

var currentTime = dayjs().format('hh:mm:ss a');
currentTimeE1.text(currentTime);
console.log(currentTime);
}
setInterval(displayTime, 1000);


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
