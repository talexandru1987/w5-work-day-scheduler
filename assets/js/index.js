let hourValue = "";
let texAreaContent = "";
let classIdentifier = "";
let stampValue;
//the object used to initialize the local storage
const timeStamps = [
  { label: "09AM", text: "", key: "09", index: 0 },
  { label: "10AM", text: "", key: "10", index: 1 },
  { label: "11AM", text: "", key: "11", index: 2 },
  { label: "12PM", text: "", key: "12", index: 3 },
  { label: "01PM", text: "", key: "13", index: 4 },
  { label: "02PM", text: "", key: "14", index: 5 },
  { label: "03PM", text: "", key: "15", index: 6 },
  { label: "04PM", text: "", key: "16", index: 7 },
  { label: "05PM", text: "", key: "17", index: 8 },
];

//initialize local storage
const onLoad = () => {
  JSON.parse(window.localStorage.getItem("timeStamps")) ||
    localStorage.setItem("timeStamps", JSON.stringify(timeStamps));
};

//add a 0 in front of id if needed
let addFrontZero = (value) => {
  return value < 10 ? "0" + value : value;
};

//function to change the css color
const changeCssColor = (idKey) => {
  //get current time
  let currentTime = parseInt(moment().format("HH"));

  //change the css
  if (currentTime === stampValue) {
    $(`#${addFrontZero(idKey)}`).css("background-color", "red");
  } else if (currentTime < stampValue) {
    $(`#${addFrontZero(idKey)}`).css("background-color", "green");
  } else if (currentTime > stampValue) {
    $(`#${addFrontZero(idKey)}`).css("background-color", "grey");
  }
};

//function to render the html elements
const renderTimeStamps = () => {
  let objValue = JSON.parse(window.localStorage.getItem("timeStamps"));
  for (var i = 0; i < objValue.length; i += 1) {
    // render the  html
    $(".container").append(
      `<div class="container-flex-div"><div id="span-div"><span id="time-span">${objValue[i].label}</span></div><textarea name="" class="event-text" id="${objValue[i].key}" cols="30" rows="10">${objValue[i].text}</textarea><button id="container-button" data-button = "${objValue[i].key}" data-index= "${objValue[i].index}" class="fa fa-lock click-btn"></button></div>`
    );
    //get the time stamp value
    stampValue = parseInt(objValue[i].key);
    changeCssColor(stampValue);
  }
};

//execute the click event
const handleClickEvent = (event) => {
  //get the event target
  const target = event.target;
  // get data attribute value
  const textAreaID = target.dataset.button;

  //get the index in the object
  const objectIndex = target.dataset.index;

  console.log(objectIndex);

  //target the text input
  const textAreaContent = document.getElementById(`${textAreaID}`);

  //get the text value
  const textValue = textAreaContent.value;

  //get the time stamp object from local storage
  let storeItems = JSON.parse(window.localStorage.getItem("timeStamps"));

  console.log(storeItems);

  //set the text value in the object for local storage
  storeItems[objectIndex].text = textValue;

  //store new object in local storage
  localStorage.setItem("timeStamps", JSON.stringify(storeItems));

  //save in local storage
  //localStorage.setItem("highscore", JSON.stringify(storeItems));
};

//add event listener for each button
const addEventListeners = () => {
  //target the page buttons
  const timeStampButtons = document.querySelectorAll(".click-btn");
  //go through each button
  timeStampButtons.forEach((btn) => {
    btn.addEventListener("click", handleClickEvent);
  });
};

$(document).ready(function () {
  onLoad();
  //create the time stamps on the page
  renderTimeStamps();
  //add the button event listeners
  addEventListeners();
  // start the timer and check past/present/future

  // when rendering the elements, check if the timestamp is current, past, future and set css accordingly

  // check if theres anything in the LS

  // set a timer. On each timer tick, the function checks all the boxes for past, future, present against the current moment

  //  display current day on the page
});
