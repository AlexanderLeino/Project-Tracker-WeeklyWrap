var startButton = document.querySelector("#exampleModalLabel")
var projectName = document.querySelector("#testText")
var hourlyRate = document.querySelector("#hourlyRate")
var projectType = document.querySelector("#projectType")
var date = document.querySelector("#date")
var currTimeP = document.querySelector("#time")
var todaysDate = moment().format("MM/DD/yyyy");function calculateTotalEarned(){
    var dateDiff = 7
    var totalEarned = 8 * dateDiff
    console.log(totalEarned)
}function startfunction(){    //Estimated total earned (hourly wage at 8 hours per day multiplied by the number of days until the due date)
    calculateTotalEarned()
}var timerVar = setInterval(() => {    var dt = new Date();
    var times = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    currTimeP.innerHTML = "Current time & Date: " + todaysDate + "  " + times
}, 1000);
startButton.addEventListener('click', startfunction)
//2:06
// so that you can push all the changes