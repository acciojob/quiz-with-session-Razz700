//your JS code here.
let userAnswers=[1,2,3,4,5];
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
let qselect=document.querySelectorAll("#questions>div>input");
if ((sessionStorage.getItem('progress'))!=null) {
    userAnswers=JSON.parse(sessionStorage.getItem('progress'));
    questionsElement.innerHTML="";
   renderQuestions(); 
   qselect=document.querySelectorAll("#questions>div>input"); 
   }  
btn.addEventListener('click',()=>{
    scoreCount=0;
qselect.forEach((elem,i)=>{
    if (elem.checked) {
      //  console.log("inside elem.checked");
for (let i = 0; i < userAnswers.length; i++) {
  if (elem.name==`question-${i}`) {
    userAnswers[i]=elem.value;
  }  
}
}
});
questions.forEach((item,i)=>{
if(item.answer==userAnswers[i]){
    scoreCount++;
}
});
// console.log(userAnswers,'useranswer in submit btn');
//sessionStorage.clear();
localStorage.clear();
//sessionStorage.setItem(`progress`,JSON.stringify(userAnswers));
localStorage.setItem('score',`${scoreCount}`);
score.innerHTML=`Your score is ${scoreCount} out of 5.`;
});
qselect.forEach((elem,j)=>{
    elem.addEventListener("click",()=>{
       // console.log('clik=k');
        userAnswers.forEach((item,i)=>{
            if (elem.name==`question-${i}`) {
                //console.log("inside changed",elem.value);
    userAnswers[i]=elem.value;
}
        });
 //console.log("after clikc",userAnswers);
 sessionStorage.clear();
 sessionStorage.setItem(`progress`,JSON.stringify(userAnswers));
 });
 });