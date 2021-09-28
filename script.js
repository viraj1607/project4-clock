const hr_T=document.getElementById("time-hr")
const min_T=document.getElementById("time-min")
const sec_T=document.getElementById("time-sec")
const amPm=document.getElementById("am_pm")

function addZero(digit){
    return digit<10 ? '0'.concat(digit) : digit 
}

function time() {
    var date=new Date();
    var hr=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();

    hr_T.innerHTML= `${addZero((hr%12) || 12)}`
    min_T.innerHTML= `${addZero(min)}`
    sec_T.innerHTML= `${addZero(sec)}`
    amPm.innerHTML=`${hr >=12 ? 'PM' : 'AM'}`
}

setInterval(time,1000);

const greet=document.querySelector(".greet")
const msg=document.querySelector(".txt")
var date=new Date();
var hr=date.getHours();

// REALTIME UPDATE

function realTimeMsg(){
    if(hr>=5 && hr<12) {
       morning();
    }
    else if(hr>=12 && hr<17) {
        afternoon();
    }
    else if(hr>=17 && hr<21) {
        greet.innerHTML="Good Evening !!"
        msg.innerHTML="LET'S PLAY SOME GAME"
        msg.style.backgroundImage="url(./images/playing.svg)";
    }
    else {
        night();
    }
}

realTimeMsg();

// PARTY BUTTON

const partyBtn=document.querySelector(".msg")
let isParty = false;
partyBtn.addEventListener("click", () => {
    if (isParty) {
        partyBtn.innerHTML = "Lets Party";
        realTimeMsg();
    } else {
        partyBtn.innerHTML="End Party"
        msg.style.backgroundImage = "url(./images/party.svg)";
        msg.innerHTML="IT'S PARTY TIME !!";
    }
    isParty =! isParty; 
});



// partyBtn.addEventListener("click",()=>{
//     msg.innerHTML="IT'S PARTY TIME !!"
//     msg.style.backgroundImage="url(./images/party.svg)";
//     partyBtn.innerHTML="Double Click to Normal"
// });

// partyBtn.addEventListener("dblclick",()=>{
//     partyBtn.innerHTML="Party Time !"
//     realTimeMsg();
// });

// UPDATE ON TIME SELECTION

document.getElementById('my-select').addEventListener('change', function(){
    if(this.value==="select-time"){
        realTimeMsg();
    }
    else{
        morning();
    }
});

document.getElementById('my-select-2').addEventListener('change', function(){
    if(this.value==="select-time"){
        realTimeMsg();
    }
    else{
        afternoon();
    }
});

document.getElementById('my-select-3').addEventListener('change', function(){
    if(this.value==="select-time"){
        realTimeMsg();
    }
    else{
        night();
    }
});


// FUNCTIONS

function morning(){
    greet.innerHTML="Good Morning !!";
    msg.innerHTML="WAKE UP AND DO WORKOUT";
    msg.style.backgroundImage="url(./images/morning.svg)";
}

function afternoon(){
    greet.innerHTML="Good Afternoon!! ";
    msg.innerHTML="LET'S HAVE SOME LUNCH"
    msg.style.backgroundImage="url(./images/lunch.svg)";
}

function night(){
    greet.innerHTML="Good Night !!"
    msg.innerHTML="HAVE DINNER AND GO FOR A SLEEP"
    msg.style.backgroundImage="url(./images/night.svg)";
}