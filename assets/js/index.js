let hourValue = "";
let texAreaContent = "";
let classIdentifier = "";
let stampValue;
//the object used to initialize the local storage
const timeStamps = [
  { label: "09AM", text: "", key: "09" },
  { label: "10AM", text: "", key: "10" },
  { label: "11AM", text: "", key: "11" },
  { label: "12PM", text: "", key: "12" },
  { label: "01PM", text: "", key: "13" },
  { label: "02PM", text: "", key: "14" },
  { label: "03PM", text: "", key: "15" },
  { label: "04PM", text: "", key: "16" },
  { label: "05PM", text: "", key: "17" },
];

//initialize local storage
let timeValues = JSON.parse(window.localStorage.getItem("timeStamps")) || timeStamps;

//function to change the css color
const changeCssColor = (idKey) => {
  //get current time
  let currentTime = parseInt(moment().format("hh"));
  //change the css
  if (currentTime === stampValue) {
    $(`#${idKey}`).css("background-color", "yellow");
  }
};

//function to render the html elements
const renderTimeStamps = () => {
  for (var i = 0; i < timeStamps.length; i += 1) {
    // render the  html
    $(".container").append(
      `<div class="container-flex-div" id="${timeStamps[i].key}" ><div id="span-div"><span id="time-span">${timeStamps[i].label}</span></div><textarea name="" id="event-text" cols="30" rows="10">${texAreaContent}</textarea><button id="container-button" class="fa fa-lock"></button></div>`
    );
    //get the time stamp value
    stampValue = parseInt(timeStamps[i].key);
    changeCssColor(stampValue);
  }
};

$(document).ready(function () {
  // add a handler, for click event

  // start the timer and check past/present/future

  // when rendering the elements, check if the timestamp is current, past, future and set css accordingly

  // check if theres anything in the LS

  // set a timer. On each timer tick, the function checks all the boxes for past, future, present against the current moment

  renderTimeStamps();
  //  display current day on the page
});
