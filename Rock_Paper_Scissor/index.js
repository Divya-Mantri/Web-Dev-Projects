const start=document.getElementById('Start-btn');
let computer=3;
let player=3;

function random(player)
{
    let index= Math.floor(Math.random()*3);
    if(index==0)
    {
        computer=0;
        return "./images/1.png";

       
    }
    else if(index==1)
    {
        computer=1;
        return "./images/2.png";
   
    }
    else
    {
        computer=2;
        return "./images/3.png";
    }
}

function user_input(rock)
{
    if(rock=="R" || rock=='r')
    {
        player=0;
        return "./images/1.png";
    }
    else if(rock=="P" || rock=='p')
    {
        player=1;
        return "./images/2.png";
    }
    else if(rock=="S" || rock=='s')
    {
        player=2;
        return "./images/3.png";
    }
    else
    {
        player=3;
        return "./images/RPS.jpg";
    }
}

function rules(computer,player)
{
    if(computer==player)
    {
        return "It's a DRAW";
    }
    else if((computer==0 && player==1)||(computer==1 && player==0))
    {
        if(computer==1)
        return "COMPUTER Wins!";
        else
        return "Player Wins!";
    }
    else if((computer==0 && player==2)||(computer==2 && player==0))
    {
        if(computer==0)
        return "COMPUTER Wins!";
        else
        return "PLAYER Wins!";

    }
    else if((computer==1 && player==2)||(computer == 2 && player==1))
    {
        if(computer==2)
        return "COMPUTER Wins!" ;
        else
        return "PLAYER Wins!";
    }
    else 
    {
        return "WAIT" ;
    }
}





start.addEventListener('click',(event)=>
{
    start.style.visibility="hidden";
    const footer=document.querySelector('footer');
    const input=document.createElement('input');
    footer.appendChild(input);
    input.style.border="none";
    input.style.padding=".3rem";
    input.style.display="block";
    input.placeholder="Input your Choice: R/P/S";
    input.style.borderRadius=".3rem";
    
})

document.addEventListener('change',(event)=>
{

    console.log(event.target.value);

    const player2=document.getElementById('player2_choice');
    player2.src = user_input(event.target.value);
    const player1=document.getElementById('player1_choice');
    player1.src=random(player1_choice);
    const result=document.getElementById('result');
    result.innerHTML = rules(computer,player);
    result.style.textAlign="center";
    result.style.fontSize="3rem";


})

    
    


    
