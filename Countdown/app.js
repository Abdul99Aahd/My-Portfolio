const video = document.getElementById('bg-video');

function playVideo() {
    video.currentTime = 0; // Reset video to the beginning
    video.play();
}
setInterval(playVideo, 9000);




var years = document.getElementById('years');
var months = document.getElementById('months');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var miliseconds = document.getElementById('miliseconds');


setInterval(function(){
    var now = new Date();
    var eidDate = new Date('06/16/2024');
    var nowgetTime = now.getTime();
    var eidgetTime = eidDate.getTime();
    var diff = eidgetTime - nowgetTime;

    var oneYear = 12 * 30 * 24 * 60 * 60 * 1000;
    var oneMonth = 30 * 24 * 60 * 60 * 1000;
    var oneDay = 24 * 60 * 60 * 1000;
    var oneHour = 60 * 60 * 1000;
    var oneMinute = 60 * 1000;
    var oneSecond = 1000;
    var oneMSecond = 100;
    
    var eidYears =  diff / oneYear;
    var eidMonths =  (diff / oneMonth);
    var eidDays =  (diff - oneMonth)/ oneDay;
    var eidHours = (diff % oneDay) / oneHour;
    var eidMinutes = (diff % oneHour) / oneMinute;
    var eidSeconds = (diff % oneMinute) / oneSecond;
    var eidMSeconds = (diff % oneSecond) / oneMSecond;
    


    years.innerText = Math.floor(eidYears);
    months.innerText = Math.floor(eidMonths);
    days.innerText = Math.floor(eidDays);
    hours.innerText = Math.floor(eidHours);
    minutes.innerText = Math.floor(eidMinutes);
    seconds.innerText = Math.floor(eidSeconds);
    miliseconds.innerText = Math.floor(eidMSeconds);

    if(years.innerText.length == 1){
        years.innerText = 0 + years.innerText;    
    }
    if(months.innerText.length == 1){
        months.innerText = 0 + months.innerText;    
    }
    if(days.innerText.length == 1){
        days.innerText = 0 + days.innerText;    
    }
    if(hours.innerText.length == 1){
        hours.innerText = 0 + hours.innerText;    
    }
    if(minutes.innerText.length == 1){
        minutes.innerText = 0 + minutes.innerText;    
    }
    if(seconds.innerText.length == 1){
        seconds.innerText = 0 + seconds.innerText;    
    }
    if(miliseconds.innerText.length == 1){
        miliseconds.innerText =  miliseconds.innerText + 0;    
    }




}, 100)