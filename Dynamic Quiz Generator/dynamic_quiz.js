//Questions 
const questionBank =
  [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: "Mars"
    },
    {
      question: "Who wrote the play Romeo and Juliet?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      answer: "William Shakespeare"
    },

    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Orca"],
      answer: "Blue Whale"
    },

    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide"
    },

    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
      answer: "Tokyo"
    },
    {
      question: "Which of these is NOT a primary color of light?",
      options: ["Red", "Green", "Blue", "Yellow"],
      answer: "Yellow"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Who invented the telephone?",
      options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
      answer: "Alexander Graham Bell"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      answer: "Au"
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    }
  ]



//Selecting 5 random question
/*
function RandomQuestion() {
  // const answer=[];

  // using set for unique object
  const data = new Set();
  while (data.size != 5) {
    const index = Math.floor(Math.random() * 10);
    data.add(questionBank[index]);
  }

  //  converting set into array
  return [...data];
}
*/

/*
function RandomQuestion()
{
  questionBank.sort(()=> Math.random()-0.5);

  return questionBank.slice(0,5);
}
*/

const arr=[];
let length=questionBank.length;

function RandomQuestion()
{
  for(let i=0;i<5;i++)
  {
    const index=Math.floor(Math.random()*length);
    arr.push(questionBank[index]);
    [questionBank[index],questionBank[length-1]]=[questionBank[length-1],questionBank[index]];
    length--;
  }
  return arr;
}

//Selecting the form & inserting all the elements into it.
const form = document.querySelector('form');

const original_answer = {};


const problem = RandomQuestion();

problem.forEach((obj, index) => {
  //------------------------Creating a div inside form------------------------------
  const div_element = document.createElement('div');
  div_element.className = "question";
  form.appendChild(div_element);
  original_answer[`q${index+1}`] = obj['answer'];

  //---------------------------Creating a paragraph inside div for question
  const para = document.createElement('p');
  para.textContent = `${index + 1}. ${obj['question']}`;
  div_element.appendChild(para);

  //Creating four options 
  obj['options'].forEach((data) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = data;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));
  })

})

//Creating Submit Button 
const button = document.createElement('button');
button.type = 'submit';
button.innerText = "Submit";
form.appendChild(button);


//Checking Answers

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  let result = 0;

  for(let [key, value] of data.entries()) {
    if (value===original_answer[key])
    {
      result=result+1;
    }
  }
  const result_display = document.querySelector('section');
  const result_para = document.createElement('p');
  result_para.innerText = `${result} out of 5 is Correct`;
  result_display.appendChild(result_para);
})


