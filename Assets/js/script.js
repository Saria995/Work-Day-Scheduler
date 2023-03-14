//setting variables-linking to HTML
var currentDayE1 = $('#currentDay');
var currentTimeE1 = $('#currentTime');
var saveButton = $('#saveBtn')
var clearE1 = $('#clearBtn')

//Function called to render page so that code only runs after page has loaded
window.onload = function(){
  colorBar();
  nineAM();
  tenAM();
  elevenAM();
  twelvePM();
  onePM();
  twoPM();
  threePM();
  fourPM();
  fivePM();
 }

// function to display date and time at the top of the page
function displayTime() {
var currentDay = dayjs().format('dddd MMMM DD, YYYY');
currentDayE1.text(currentDay);
//console.log(currentDay);

var currentTime = dayjs().format('hh:mm:ss a');
currentTimeE1.text(currentTime);
//console.log(currentTime);
}
setInterval(displayTime, 1000);


// Setting color codes to the time blocks to reflect past, present, future depending on time of the day
//Calander is based on working hours from 9am-5pm

var current = new Date().getHours();
//console.log(current);

function colorBar() {
  if (current > 9) {
    $("#comment9am").addClass("past");
  } else if (current >= 9 && current < 10) {
    $("#comment9am").addClass("present");
  } else if (current < 9) {
    $("#comment9am").addClass("future");
  }
  if (current > 10) {
    $("#comment10am").addClass("past");
  } else if (current >= 10 && current < 11) {
    $("#comment10am").addClass("present");
  } else if (current < 10) {
    $("#comment10am").addClass("future");
  }
  if (current > 11) {
    $("#comment11am").addClass("past");
  } else if (current >= 11 && current < 12) {
    $("#comment11am").addClass("present");
  } else if (current < 12) {
    $("#comment11am").addClass("future");
  }
  if (current > 12) {
    $("#comment12pm").addClass("past");
  } else if (current >= 12 && current < 13) {
    $("#comment12pm").addClass("present");
  } else if (current < 12) {
    $("#comment12pm").addClass("future");
}
if (current > 13) {
  $("#comment1pm").addClass("past");
} else if (current >= 13 && current < 14) {
  $("#comment1pm").addClass("present");
} else if (current < 13) {
  $("#comment1pm").addClass("future");
}
if (current > 14) {
  $("#comment2pm").addClass("past");
} else if (current >= 14 && current < 15) {
  $("#comment2pm").addClass("present");
} else if (current < 14) {
  $("#comment2pm").addClass("future");
}
if (current > 15) {
  $("#comment3pm").addClass("past");
} else if (current >= 15 && current < 16) {
  $("#comment3pm").addClass("present");
} else if (current < 15) {
  $("#comment3pm").addClass("future");
}
if (current > 16) {
  $("#comment4pm").addClass("past");
} else if (current >= 16 && current < 17) {
  $("#comment4pm").addClass("present");
} else if (current < 16) {
  $("#comment4pm").addClass("future");
}
if (current > 17) {
  $("#comment5pm").addClass("past");
} else if (current >= 17 && current < 18) {
  $("#comment5pm").addClass("present");
} else if (current < 17) {
  $("#comment5pm").addClass("future");
}
}

// call functions for each timeblock to save input and save output to local storage even when user hits refresh
function nineAM() {
  var inputArea = document.querySelector("#comment9am");
  var outputArea = document.querySelector("#comment9am");
  var save_button = document.querySelector("#saveBtn");

  save_button.addEventListener("click", updateOutput);

  outputArea.textContent = localStorage.getItem("content");
  inputArea.value = localStorage.getItem("content");

  function updateOutput() {
    localStorage.setItem("content", inputArea.value);

    outputArea.textContent = inputArea.value;
  }
}

function tenAM() {
  var inputArea2 = document.querySelector("#comment10am");
  var outputArea2 = document.querySelector("#comment10am");
  var save_button2 = document.querySelector("#saveBtn2");

  save_button2.addEventListener("click", updateOutput2);

  outputArea2.textContent = localStorage.getItem("content2");
  inputArea2.value = localStorage.getItem("content2");

  function updateOutput2() {
    localStorage.setItem("content2", inputArea2.value);

    outputArea2.textContent = inputArea2.value;
  }
}

function elevenAM() {
  var inputArea3 = document.querySelector("#comment11am");
  var outputArea3 = document.querySelector("#comment11am");
  var save_button3 = document.querySelector("#saveBtn3");

  save_button3.addEventListener("click", updateOutput3);

  outputArea3.textContent = localStorage.getItem("content3");
  inputArea3.value = localStorage.getItem("content3");

  function updateOutput3() {
    localStorage.setItem("content3", inputArea3.value);

    outputArea3.textContent = inputArea3.value;
  }
}

function twelvePM() {
  var inputArea4 = document.querySelector("#comment12pm");
  var outputArea4 = document.querySelector("#comment12pm");
  var save_button4 = document.querySelector("#saveBtn4");

  save_button4.addEventListener("click", updateOutput4);

  outputArea4.textContent = localStorage.getItem("content4");
  inputArea4.value = localStorage.getItem("content4");

  function updateOutput4() {
    localStorage.setItem("content4", inputArea4.value);

    outputArea4.textContent = inputArea4.value;
  }
}

function onePM() {
  var inputArea5 = document.querySelector("#comment1pm");
  var outputArea5 = document.querySelector("#comment1pm");
  var save_button5 = document.querySelector("#saveBtn5");

  save_button5.addEventListener("click", updateOutput5);

  outputArea5.textContent = localStorage.getItem("content5");
  inputArea5.value = localStorage.getItem("content5");

  function updateOutput5() {
    localStorage.setItem("content5", inputArea5.value);

    outputArea5.textContent = inputArea5.value;
  }
}

function twoPM() {
  var inputArea6 = document.querySelector("#comment2pm");
  var outputArea6 = document.querySelector("#comment2pm");
  var save_button6 = document.querySelector("#saveBtn6");

  save_button6.addEventListener("click", updateOutput6);

  outputArea6.textContent = localStorage.getItem("content6");
  inputArea6.value = localStorage.getItem("content6");

  function updateOutput6() {
    localStorage.setItem("content6", inputArea6.value);

    outputArea6.textContent = inputArea6.value;
  }
}

function threePM() {
  var inputArea7 = document.querySelector("#comment3pm");
  var outputArea7 = document.querySelector("#comment3pm");
  var save_button7 = document.querySelector("#saveBtn7");

  save_button7.addEventListener("click", updateOutput7);

  outputArea7.textContent = localStorage.getItem("content7");
  inputArea7.value = localStorage.getItem("content7");

  function updateOutput7() {
    localStorage.setItem("content7", inputArea7.value);

    outputArea7.textContent = inputArea7.value;
  }
}

function fourPM() {
  var inputArea8 = document.querySelector("#comment4pm");
  var outputArea8 = document.querySelector("#comment4pm");
  var save_button8 = document.querySelector("#saveBtn8");

  save_button8.addEventListener("click", updateOutput8);

  outputArea8.textContent = localStorage.getItem("content8");
  inputArea8.value = localStorage.getItem("content8");

  function updateOutput8() {
    localStorage.setItem("content8", inputArea8.value);

    outputArea8.textContent = inputArea8.value;
  }
}

function fivePM() {
  var inputArea9 = document.querySelector("#comment5pm");
  var outputArea9 = document.querySelector("#comment5pm");
  var save_button9 = document.querySelector("#saveBtn9");

  save_button9.addEventListener("click", updateOutput9);

  outputArea9.textContent = localStorage.getItem("content9");
  inputArea9.value = localStorage.getItem("content9");

  function updateOutput9() {
    localStorage.setItem("content9", inputArea9.value);

    outputArea9.textContent = inputArea9.value;
  }
}

//Clear button to help users clear all fields at once
$('#clearBtn').click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});


//Trying to output this but not working- need help with how the elments/aspects of this work and what i need to use 
saveButton.on("click", function() {
  var value = $(this).siblings(".textarea").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(value, time);
    
  })
  $("#comment4pm .description"). val(localStorage.getItem("comment4pm"));
  
