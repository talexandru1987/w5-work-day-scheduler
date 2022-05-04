let hourValue = "";
let texAreaContent = "";
let classIdentifier = "";
//the object used to initialize the local storage
const timeStamps = [
  { label: "9AM", text: "", key: "09" },
  { label: "10AM", text: "", key: "10" },
  { label: "11AM", text: "", key: "11" },
  { label: "12PM", text: "", key: "12" },
  { label: "1PM", text: "", key: "13" },
  { label: "2PM", text: "", key: "14" },
  { label: "3PM", text: "", key: "15" },
  { label: "4PM", text: "", key: "16" },
  { label: "5PM", text: "", key: "17" },
];

//initialize local storage
let timeValues =
  JSON.parse(window.localStorage.getItem("timeStamps")) || timeStamps;
//console.log("timeStamps: " + timeStamps);

$(document).ready(function () {
  // add a handler, for click event

  // start the timer and tcheck past/present/future

  function renderTimestamps() {
    for (var i = 0; i < timeStamps.length; i += 1) {
      // using moment js, compare if the current key is equal, greater or lesser than moment
      //get current time
      let currentTime = parseInt(moment().format("hh"));
      //get the time stamp value
      let stampValue = parseInt(timeStamps[i].key);

      // and set css classes accordingly
      $(".container").append(
        `<div class="container-flex-div" id="${timeStamps[i].key}" ><div id="span-div"><span id="time-span">${timeStamps[i].label}</span></div><textarea name="" id="event-text" cols="30" rows="10">${texAreaContent}</textarea><button id="container-button" class="fa fa-lock"></button></div>`
      );

      //change the csss
      if (currentTime === stampValue) {
        $(`#${timeStamps[i].key}`).css("background-color", "yellow");

        console.log("test");
      }
    }
  }

  // when rendering the elements, check if the timestamp is current, past, future and set css accordingly

  // check if theres anything in the LS

  // set a timer. On each timer tick, the function checks all the boxes for past, future, present against the current moment

  renderTimestamps();
  //  display current day on the page
});
