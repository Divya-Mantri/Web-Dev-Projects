const access=document.querySelector('p');

// function getRandomQuote() 
// {
 
// }

 const quotes = 
  [
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Knowledge is power.", author: "Francis Bacon" },
    { text: "I think, therefore I am.", author: "René Descartes" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Well done is better than well said.", author: "Benjamin Franklin" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "If you tell the truth, you don’t have to remember anything.", author: "Mark Twain" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { text: "Time is money.", author: "Benjamin Franklin" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" }
  ];


const background=document.body;
function getRandomColor()
{
  const red_random=Math.floor(Math.random()*256);
  const green_random=Math.floor(Math.random()*256);
  const blue_random=Math.floor(Math.random()*256);
  const alpha=Math.random();
  background.style.backgroundColor=`rgba(${red_random},${green_random},${blue_random},${alpha})` ;
}

//Events are -
// click 
// dblclick 
// mousemove 
// mouseover 

const button=document.querySelector('button');
button.addEventListener('click',(event)=>
{
  console.log(event.target);
  console.log(event.type)
  console.log(event.clientX)
  console.log(event.clientY)
  const random=Math.floor(Math.random()*quotes.length);
  access.innerHTML= "<i>"+ quotes[random].text +"  — " + quotes[random].author +"</i>";
})

// Keyboard Events 
// 1.keydown 
// 2.keyup

// document.addEventListener('keydown',(event)=>
// {
//   if(event.key=="Enter")
//   {
//     const random=Math.floor(Math.random()*quotes.length);
//     access.innerHTML= "<i>"+ quotes[random].text +"  — " + quotes[random].author +"</i>";
//   }
//   console.log(event.target)
// })

// setInterval(getRandomQuote,4000);
setInterval(getRandomColor,2000);



