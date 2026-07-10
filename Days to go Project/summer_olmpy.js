function day_timer()
{
    const days=document.getElementById('days');
    const display_days=new Date();
    const event_date=new Date("2028-07-21T00:00:00");
    const time_diff=event_date - display_days;
    const days_left=Math.floor(time_diff/(1000*60*60*24));
    days.innerHTML=days_left;
}
setInterval(day_timer,1000);

const days=document.getElementById('days');
days.style.fontSize="10rem";
days.style.fontWeight="bold";
days.style.textShadow="0px 0px 2px whitesmoke";

function time_timer()
{
    const timer=document.getElementById('timer');
    const display_time=new Date();
    const event_date=new Date("2028-07-21T00:00:00");
    const time_diff=event_date - display_time;
    const hours_left=Math.floor((time_diff/(1000*60*60))%24);
    const minutes_left=Math.floor((time_diff/(1000*60))%60);
    const seconds_left=Math.floor((time_diff/(1000))%60);
    timer.innerHTML= hours_left +"    "+ minutes_left +"   "+ seconds_left ;
}

setInterval(time_timer,1000);

const timer=document.getElementById('timer');
timer.style.fontSize="5rem";
timer.style.textShadow="0px 0px 3px whitesmoke";