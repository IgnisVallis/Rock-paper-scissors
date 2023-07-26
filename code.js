"use strict";
const edge = document.getElementById("edge");
const phoenix = document.getElementById("phoenix")
const edgeScore = document.getElementById("edge-puntuation");
const phoenixScore = document.getElementById("phoenix-puntuation");
const edgePanel = document.getElementById("options-edge");
const phoenixPanel = document.getElementById("options-phoenix");
const edgeVoice = document.getElementById("edge-audios");
const phoenixVoice = document.getElementById("phoenix-audios");
const hammerSound = document.getElementById("judge-hammer");
const mainTheme = document.getElementById("main-theme");
const main = document.getElementsByTagName("main");
const start = document.getElementById("start");
const options = ["rock","paper","scissor"];
const winnerScreen = document.querySelector(".final-screen");
const cheers = document.getElementById("cheers");

console.log(winnerScreen);


let playerCounter = 0;
let computerCounter = 0;
let playerChoise;
let computerChoise;//this variable is for the function duel
let computerSelection;// this is for add the class selection-chosen
let winner;



start.addEventListener("click",()=>{
main[0].style.display = "block";
start.style.display = "none";
mainTheme.volume = ".2"
mainTheme.play();
})

phoenixPanel.addEventListener("click", e =>{
if(e.target.alt == "rock" || e.target.alt == "paper" || e.target.alt == "scissor"){
    computerSelection = Math.floor(Math.random() * 3);
  for (let i = 0; i < phoenixPanel.children.length; i++) {//with this only a element will have the class wich lend the yellow border
        playerChoise = e.target.alt;
        phoenixPanel.children[i].classList.remove("selection-chosen");
    }
     e.target.classList.add("selection-chosen");//this is the class wich has the yellow border
     for (let i = 0; i < edgePanel.children.length; i++) {//with this only a element will have the class wich lend the yellow border
        edgePanel.children[i].classList.remove("selection-chosen");
    }
     edgePanel.children[computerSelection].classList.add("selection-chosen");
}
computerChoise = options[computerSelection];
  duel();
})

function duel(){
  if(playerChoise == computerChoise) hammerSound.play();
    else if(playerChoise == "rock" && computerChoise == "paper" || //all the case the player lost.
        playerChoise == "paper" && computerChoise == "scissor" ||
        playerChoise == "scissor" && computerChoise == "rock"){
        computerChoise == "rock"? edgeVoice.children[0].play() : 
        computerChoise == "paper"? edgeVoice.children[1].play():
        edgeVoice.children[2].play();
            edge.src == "./imgs/edge.png"? console.log("todo bien") : 
            edge.src = "./imgs/edge.png";
            phoenix.src == "./imgs/scared-phoenix.png"? console.log("todo bien") :
            phoenix.src = "./imgs/scared-phoenix.png";
            computerCounter++;
            edgeScore.innerHTML = computerCounter;
            if(computerCounter == 4) displayTheWinner();
        }else{
            playerChoise == "rock"? phoenixVoice.children[0].play():
            playerChoise == "paper"? phoenixVoice.children[1].play():
            phoenixVoice.children[2].play();
            phoenix.src == "./imgs/phoenix.png"? console.log("todo bien") :
            phoenix.src = "./imgs/phoenix.png";
            edge.src == "./imgs/angry-edge.png"? console.log("todo bien") : 
            edge.src = "./imgs/angry-edge.png";
            playerCounter++;
           phoenixScore.innerHTML = playerCounter;
           if(playerCounter == 5) displayTheWinner();
         }
}

function displayTheWinner(){
    winner = playerCounter > computerCounter ? "phoenix": "edge";
    playerCounter = 0;
    computerCounter = 0;
    mainTheme.pause();
    main[0].style.display = "none"
    winnerScreen.firstElementChild.innerHTML = `congratulations ${winner} you are the winner`;
    winnerScreen.children[1].src = winner == "phoenix"? "./imgs/happy-phoenix.png" : "./imgs/edge.png";
    winnerScreen.classList.remove("oculted");
    cheers.volume = ".3";
    cheers.play();

}