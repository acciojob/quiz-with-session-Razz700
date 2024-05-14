//your JS code here.
let userAnswers=[];
let questionsElement=document.getElementById('questions');
let btn=document.getElementById('submit');
let score=document.getElementById('score');

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
// next
let scoreCount=0;
let selectArray=[];
let j=0;
let qselect=document.querySelectorAll("#questions>div>input");
btn.addEventListener('click',()=>{
    userAnswers=[];
qselect.forEach((elem,i)=>{
    if (elem.checked) {
if(questions[j].answer==elem){
    scoreCount++;
    j++;
}
 userAnswers.push(elem.value);
selectArray.push(i);}
    }); 
 sessionStorage.clear();
 localStorage.clear();
sessionStorage.setItem(`progress`,JSON.stringify(userAnswers));
localStorage.setItem('score',`${scoreCount}`);
score.innerHTML=`Your score is ${scoreCount} out of 5`;
});
    
document.addEventListener('DOMContentLoaded',()=>{
   
   if ((sessionStorage.getItem('progress'))!=null) {
    userAnswers=JSON.parse(sessionStorage.getItem('progress'));
    questionsElement.innerHTML="";
   renderQuestions();  
   }  
});

//next
qselect.forEach((elem,j)=>{
    elem.addEventListener("click",()=>{
    userAnswers=[];
qselect.forEach((item,i)=>{
if(item.checked){
    userAnswers.push(item.value);
}
});
sessionStorage.clear();
sessionStorage.setItem(`progress`,JSON.stringify(userAnswers));
});
});

