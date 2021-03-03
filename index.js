const rockbtn = document.getElementById('rock');
const scissbtn = document.getElementById('scissors');
const paperbtn = document.getElementById('paper');
const choice = ['<i class="fas fa-hand-rock"></i>', '<i class="fas fa-hand-paper">', '<i class="fas fa-hand-scissors"></i>'];
let yourScore = 0;
let cpuScore = 0;

rockbtn.addEventListener('click', ()=>{
    let input_you = document.getElementById('you')
    let input_cpu = document.getElementById('cpu');
    let randomNum = Math.floor(Math.random() * choice.length)
    let rockNum = 0
    let rock = choice[rockNum]
    input_cpu.innerHTML = choice[randomNum]
    input_you.innerHTML = rock;
    updateScore(randomNum, rockNum);
    let myScore = document.getElementById('yourScore');
    let comScore = document.getElementById('cpuScore');
    myScore.innerHTML = `${yourScore}`;
    comScore.innerHTML = `${cpuScore}`;
    console.log(yourScore, cpuScore)
})
scissbtn.addEventListener('click', ()=>{
    const input_you = document.getElementById('you');
    const input_cpu = document.getElementById('cpu');
    const randomNum = Math.floor(Math.random() * choice.length)
    let scissorsNum = 2;
    let scissors = choice[scissorsNum]
    let cpu = input_cpu.innerHTML = choice[randomNum]
    let you = input_you.innerHTML = scissors;
    updateScore(randomNum, scissorsNum);
    let myScore = document.getElementById('yourScore');
    let comScore = document.getElementById('cpuScore');
    myScore.innerHTML = `${yourScore}`;
    comScore.innerHTML = `${cpuScore}`;
    console.log(yourScore, cpuScore)
})

paperbtn.addEventListener('click', ()=>{
    const input_you = document.getElementById('you');
    const input_cpu = document.getElementById('cpu');
    const randomNum = Math.floor(Math.random() * choice.length)
    let paperNum = 1;
    let paper = choice[paperNum]
    let cpu = input_cpu.innerHTML = choice[randomNum]
    let you = input_you.innerHTML = paper;
    updateScore(randomNum, paperNum);
    let myScore = document.getElementById('yourScore');
    let comScore = document.getElementById('cpuScore');
    myScore.innerHTML = `${yourScore}`;
    comScore.innerHTML = `${cpuScore}`;
    console.log(yourScore, cpuScore)
})

const updateScore = (num, index) =>{
    if(index === 0){
    switch(num){
        case 0: yourScore += 0;
        break;
        case 1: cpuScore += 1;
        break;
        case 2: yourScore += 1;
        break;
    }
} else if(index === 1){
   switch(num){
       case 0: yourScore += 1;
       break;
       case 1: cpuScore += 0;
       break;
       case 2: cpuScore += 1;
       break;
   }
} else if(index === 2){
    switch(num){
       case 0: cpuScore += 1;
       break;
       case 1: yourScore += 1;
       break;
       case 2: yourScore += 0; 
    }}
}