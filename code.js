"use strict";
const options = ["rock","paper","scissor"];

let playerCounter = 0;
let computerCounter = 0;
let winner;

console.log("Welcome to rock, paper and scissor, you are going to play versus the computer, in a five rounds match so enjoy the match");
function playAGame(){
    if(playerCounter == 5 || computerCounter == 5){
     winner = `${playerCounter > computerCounter ? "player": "computer"} WINS!!`;
     playerCounter = 0;
     computerCounter = 0;
    }
  else{
  let playerChoise = prompt("choose one 0:rock, 1:paper or 2: scissor");
    let computerChoise = Math.floor(Math.random()* 3);
 
    while(isNaN(playerChoise) || playerChoise < 0 || playerChoise > 2 || playerChoise == ""){ 
        playerChoise = prompt("Please enter a correct input : 0:rock, 1:paper or 2: scissor");
    }
    if(playerChoise == computerChoise){
        console.log("It's a DRAW!!");
        alert("It's a DRAW!!");
        
    }else if(playerChoise == 0 && computerChoise == 1 ||
        playerChoise == 1 && computerChoise == 2 ||
        playerChoise == 2 && computerChoise == 0){
            computerCounter++;
            console.log(`YOU LOSE!! ${options[computerChoise]} beats ${options[playerChoise]}`);
            alert(`YOU LOSE!! ${options[computerChoise]} beats ${options[playerChoise]}`)
        }else{
            console.log(`YOU WIN!! ${options[playerChoise]} beats ${options[computerChoise]}`);
            alert(`YOU WIN!! ${options[playerChoise]} beats ${options[computerChoise]}`);
            playerCounter++;
            
        }
        playAGame();
    }
 return winner;
}


