// SELECTING ELEMENTS & INITIALIZING VARIABLES

const rockbtn = document.getElementById('rock');
const scissbtn = document.getElementById('scissors');
const paperbtn = document.getElementById('paper');
let input_you = document.getElementById('you');
let input_cpu = document.getElementById('cpu'); 
let myScore = document.getElementById('yourScore');
let comScore = document.getElementById('cpuScore');
const choice = ['<i class="fas fa-hand-rock"></i>', '<i class="fas fa-hand-paper">', '<i class="fas fa-hand-scissors"></i>'];
let yourScore = 0;
let cpuScore = 0;

// CLICK FUNCTIONS

rockbtn.addEventListener('click', ()=>{
    let randomNum = Math.floor(Math.random() * choice.length)
    let rockNum = 0
    let rock = choice[rockNum]
    input_cpu.innerHTML = choice[randomNum]
    input_you.innerHTML = rock;
    updateScore(randomNum, rockNum);
    myScore.innerHTML = `${yourScore}`;
    comScore.innerHTML = `${cpuScore}`;
})
scissbtn.addEventListener('click', ()=>{
    const randomNum = Math.floor(Math.random() * choice.length)
    let scissorsNum = 2;
    let scissors = choice[scissorsNum]
    input_cpu.innerHTML = choice[randomNum]
    input_you.innerHTML = scissors;
    updateScore(randomNum, scissorsNum);
    myScore.innerHTML = `${yourScore}`;
    comScore.innerHTML = `${cpuScore}`;
})

paperbtn.addEventListener('click', ()=>{
    const randomNum = Math.floor(Math.random() * choice.length)
    let paperNum = 1;
    let paper = choice[paperNum]
    input_cpu.innerHTML = choice[randomNum]
    input_you.innerHTML = paper;
    updateScore(randomNum, paperNum);
    myScore.innerHTML = `${yourScore}`;
    comScore.innerHTML = `${cpuScore}`;
})

// SWITCH STATEMENT TO UPDATE SCORE

const updateScore = (num, index) =>{
    if(index === 0){
    switch(num){
        case 0: yourScore;
        break;
        case 1: cpuScore++;
        break;
        case 2: yourScore++;
        break;
    }
} else if(index === 1){
   switch(num){
       case 0: yourScore++;
       break;
       case 1: cpuScore;
       break;
       case 2: cpuScore++;
       break;
   }
} else if(index === 2){
    switch(num){
       case 0: cpuScore++;
       break;
       case 1: yourScore++;
       break;
       case 2: yourScore; 
    }}
}