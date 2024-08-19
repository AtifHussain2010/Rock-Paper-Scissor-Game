// JS Work Start Soon...

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissor = document.querySelector('#Scissor');

let userResult = document.querySelector('#User-Result');
let AIResult = document.querySelector('#AI-Result');

let choices = document.querySelectorAll('.choice');

// A.I thinking 

const AI = () => {
    let allOptions = ['Rock', 'Paper', 'Scissor'];
    let AIIdx = Math.floor(Math.random() * 3);
    return allOptions[AIIdx];
}

// Draw 
    const draw = () => {
       msgBox.innerText ='Its Draw, Try Again';
       msgBox.style.background = 'linear-gradient(180deg, aliceblue, green, red)'
        }
    let msgBox = document.querySelector('#Status-Box')
    let AIScore = 0;
// IF AI WINS 
const AIWin = () => {
    msgBox.innerText = 'You lost and AI Wins.'
    msgBox.style.backgroundColor = 'Red';
    msgBox.style.background = 'linear-gradient(45deg, red, red)';
    msgBox.style.color = 'white';
    AIScore++;
    AIResult.innerText = AIScore;
}
// IF User Wins
let userScore = 0;
const userWin = () => {
    msgBox.innerText = 'Congratulation, You wins and AI Lost';
    msgBox.style.background = 'linear-gradient(40deg, green,  green)'
    msgBox.style.color = '#fff';
    userScore++
    userResult.innerText = userScore;
}
// Tracking Options

choices.forEach((option) => {
    option.onclick = () => {
        let selected = option.getAttribute('id');
        let AIChoice = AI(); 
        console.log('AI =', AIChoice);
        console.log('User =', selected);
    if(AIChoice == selected){
        draw();
        console.log('Its Draw');
    } else if(selected === 'Paper' && AIChoice === 'Rock'){
        AIWin();
        console.log('AI wins You selected Paper and AI Selected Rock');
    } else if(selected === 'Paper' && AIChoice === 'Scissor'){
        AIWin();
        console.log('AI wins You selected Paper and AI Selected Scissor');
    } else if(selected === 'Rock' && AIChoice === 'Scissor'){
        userWin();
        console.log('Congratulation You Win You selected Rock and AI Selected Scissor');
    } else if(selected ==='Rock' && AIChoice === 'Paper'){
        userWin();
        console.log('Very Very Good to see you Wining, You win AI Lost. You selected Rock and AI Paper.')
    } else if(selected === 'Scissor' && AIChoice === 'Rock'){
        AIWin();
    console.log('You lost Better Luck Next Time. AI choosed Rock and You Scissor');
    } else if(selected === 'Scissor' && AIChoice === 'Paper'){
        userWin();
        console.log('You Win Congratulation, You was Scissor and AI was Paper just like Cuting paper');
    }}

     
    
})

