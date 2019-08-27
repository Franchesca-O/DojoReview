var hour = 8;
var minute = 50;
var period = "AM"

if (hour ===8 && minute > 45 && period =="AM"){
    console.log ("It's almost 9 in the morning")
}

hour = 7;
minute = 15;
period = "PM"

if (hour === 7 && minute > 00 && minute < 20 && period =="PM"){
    console.log ("It's just after 7 in the evening")
}

hour = 6;
minute = 25;
period = "AM";

if (minute < 30){
    console.log("It's just after the hour")
}

minute = 31;

if(minute > 3){
    console.log("It's almost " + (hour+1));
};


if (period == "AM"){
    console.log ("It's " + hour + ":" + minute + " in the morning")
};

period = "PM";

if (period == "PM"){
    console.log ("It's " + hour + ":" + minute + " in the evening")
};

minute = 15;

if (minute == 15){
    console.log("It's a quater after " + hour)
};

minute = 30

if(minute==30){
    console.log("It's half past " + hour)    
}

minute = 5;

if (minute==5){
    console.log("It's five past " + hour);
}
