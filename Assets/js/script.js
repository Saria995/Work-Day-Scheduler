//window onload function
$(document).ready(function() {
  
  
//setting variables-linking to HTML
  var currentDayE1 = $('#currentDay');
var currentTimeE1 = $('#currentTime');
var saveButton = $('#saveBtn')
var clearE1 = $('#clearBtn')


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

//Clear button to help users clear all fields at once
$('#clearBtn').click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});


//Save to local storate when the save button is clicked- schedule displays even when page is refreshed

  $(".saveBtn").on("click", function() {
    console.log("click");
    var value = $(this).parent().siblings(".textarea").val();
    var time = $(this).parent().siblings(".textarea").attr("id");
    localStorage.setItem(time, value);
    console.log(value, time);
  })
  $("#comment9am").val(localStorage.getItem("comment9am"));
  $("#comment10am").val(localStorage.getItem("comment10am"));
  $("#comment11am").val(localStorage.getItem("comment11am"));
  $("#comment12pm").val(localStorage.getItem("comment12pm"));
  $("#comment1pm").val(localStorage.getItem("comment1pm"));
  $("#comment2pm").val(localStorage.getItem("comment2pm"));
  $("#comment3pm").val(localStorage.getItem("comment3pm"));
  $("#comment4pm").val(localStorage.getItem("comment4pm"));
  $("#comment5pm").val(localStorage.getItem("comment5pm"));
  colorBar();
})