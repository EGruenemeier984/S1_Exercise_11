"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Ethan Gruenemeier
   Date: 2.5.19

*/
// function to create and run the countdown
function runClock() {
    //Store the current date and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    // display the current date and time
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

    // calculate the days until New Year's Day
    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


    // display the time left until New Year's Eve;
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);

}
runClock();
setInterval("runClock()", 1000);