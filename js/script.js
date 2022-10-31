// Display current date and time on Jumbotron on the mainpage
var date = new Date();
document.getElementById("currentDay").innerHTML = date;


// Function that will be used for save button click event to save calendar text to localStorage
function saveToCalendar() {
    let eventText = [];
    for(let i = 0; i < 9; i++) {
        let id = '#calendarTextarea' + i.toString();
        let eventEl = $(id)[0];
        console.log(eventEl.value);
        eventText.push(eventEl.value);
    }
    let jsonString = JSON.stringify(eventText);
    localStorage.setItem("eventText", jsonString);
    
}


// Function to load saved text onto calendar from localStorage
function reloadToCalendar() {
    let eventText = [];
    let text = localStorage.getItem("eventText");

    // if statement to check if there is text in localStorage before loading to the calendar 
    if(text !== undefined && text !== null && text !== ""){
    eventText = JSON.parse(text);
    for(let i = 0; i <= 9; i++) {
        $('#calendarTextarea' + i.toString())[0].value = eventText[i];
        } 
    }
}

// Load any items on 
window.onload = reloadToCalendar();


// event listener for cick to save text entered to calendar
$('Button.saveBtn').click(saveToCalendar);


