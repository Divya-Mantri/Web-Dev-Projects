
function clock()
{
    const time =new Date().toLocaleTimeString();
    const display_time=document.getElementById('root');
    display_time.innerHTML=time;
}

setInterval(clock,1000);

const display_time=document.getElementById('root');
document.body.style.margin="0";
display_time.style.boxSizing="borderbox";
display_time.style.height="100vh";
display_time.style.fontSize="150px";
display_time.style.display="flex";
display_time.style.justifyContent="center";
display_time.style.alignItems="center";
display_time.style.textAlign="center";

