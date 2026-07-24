
const grid = document.getElementById('grid');

let winner =
    [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let board_array = new Array(9).fill("E");

function checkWinner() 
{
    for (let [index0, index1, index2] of winner) 
    {
        if (board_array[index0] != "E" && (board_array[index0] === board_array[index1]) && (board_array[index1] === board_array[index2])) 
        {
            return 1;
        }
    }
    return 0;

}

let count=0;
const turn_highlight_X=document.getElementById('playerx-btn');
const turn_highlight_O=document.getElementById('player0-btn');

const printer = (event)=>
{
    const element = event.target;
  

    if (board_array[element.id] == "E") 
    {

        if (element.id == "grid") 
        {
            pass;
        }
        else if (turn === "O") 
        {
            element.innerHTML = "O"
            board_array[element.id] = "O";
            if (checkWinner()) 
            {
                const winning_message = document.getElementById('winning_message');
                winning_message.innerHTML = `Winner is: O`;
                grid.removeEventListener('click',printer);
                return ;
            }
            turn = "X";
            turn_highlight_X.style.scale=1.3;
            turn_highlight_O.style.scale=1;
            count++;
        }
        else 
        {
            element.innerHTML = "X";
            board_array[element.id] = "X";
            if (checkWinner()) 
            { 
                const winning_message = document.getElementById('winning_message');
                winning_message.innerHTML = `Winner is: X`;
                grid.removeEventListener('click',printer);
                return ;
            }
            turn = "O";
    
            turn_highlight_O.style.scale=1.3;
            turn_highlight_X.style.scale=1;
            count++;
        }
        if(count==9)
        {
            const winning_message=document.getElementById('winning_message');
            winning_message.innerHTML=`Match is Draw`;
            grid.removeEventListener('click',printer);
        }
    }
}

grid.addEventListener('click',printer);
let turn ="O";

const restart= document.getElementById('restart');

restart.addEventListener('click',()=>
{
   const box=document.getElementsByClassName('box');
   
   Array.from(box).forEach((value)=>
    {
        value.innerHTML="";
    });

    turn="O";
    count=0;

    board_array=new Array(9).fill("E");
    document.getElementById('winning_message').innerHTML="";
    turn_highlight_O.style.scale=1;
    turn_highlight_X.style.scale=1;
    grid.addEventListener('click',printer);

})



