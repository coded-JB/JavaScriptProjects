'use strict'
// console.log(document.querySelector('.message').
// textContent);

// document.querySelector('.score').textContent = 30;


// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random()* 20) + 1;

document.querySelector('.number').textContent = secretNumber


let score = 30;

document.querySelector('.check').addEventListener
('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if(!guess){
    document.querySelector('.message').
 textContent = "Please Input  a Value";


  }else if(guess === secretNumber){
    document.querySelector('.message').textContent = "Correct Number 👏 ";

    document.querySelector('body').style.backgroundColor = 'lightgreen';

     

    } else if(guess > secretNumber){
        if(score > 1){
          document.querySelector('.message').textContent = "Too big";
          score--;
          document.querySelector('.score').textContent = score;
        }else{
          document.querySelector('.message').textContent = "Game Over Loser";
          document.querySelector('.score').textContent = 0;
        }
    
  }else if (guess < secretNumber){
    if(score > 0){
      document.querySelector('.message').textContent = "Too low";
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = "Game Over Loser";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
 });  

