'use strict';

// document.querySelector('.message').textContent = 'Hurry! Correct answer';


// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// declaring a number for the correct number when the user guess, the math.random help to choose a random number then when you dont want it to be above 20 thats when we multipl by 20 and add 1 to it . since the math.random always print out in decimal we introduce the math. trunce that rounds off the decimal.
let secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


// firstly, we select the check button using query selector, 
// then add a click event listener so that when the user clicks the button,
// its going to be stored ,thats why we create a function 
// and declare a constant variable  

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // when the user dosent input any number, the text content should change to no number
    if (!guess){
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('No number!')
    }

    // when the player wins
   else if (guess === secretNumber){
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
   }

   if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
   }

//    when the player inputs a high number
   else if (guess !== secretNumber){
    if(score > 1){
    // document.querySelector('.message').textContent = '📈 Too high';
    displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
}
    else{
        // document.querySelector('.message').textContent = 'You lost the game ';
        displayMessage('You lost the game');
        document.querySelector('.score').textContent = 0;
    }
   }

// // when the player input a low number
//    else if (guess < secretNumber){
//     if (score > 1){
//     document.querySelector('.message').textContent = '📉 Too low';
//     score--;
//     document.querySelector('.score').textContent = 0;
//    }
// //    the player loses the game
// else{
//     document.querySelector('.message').textContent = 'You lost the game ';
//         document.querySelector('.score').textContent = 0; 

// }}
}) 


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    // document.querySelector('.message').textContent = ('Start guessing...')
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
        
});