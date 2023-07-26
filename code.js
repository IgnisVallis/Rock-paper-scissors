"use strict";
const edgeScore = document.getElementById("edge-puntuation");
const phoenixScore = document.getElementById("phoenix-puntuation");
const edgePanel = document.getElementById("options-edge");
const phoenixPanel = document.getElementById("options-phoenix");
const options = ["rock","paper","scissor"];

let playerCounter = 0;
let computerCounter = 0;
let computerSelection;
let arrayPrueba;
let winner;

phoenixPanel.addEventListener("click", e =>{
if(e.target.alt == "rock" || e.target.alt == "paper" || e.target.alt == "scissor"){
    computerSelection = Math.floor(Math.random() * 3);
  for (let i = 0; i < phoenixPanel.children.length; i++) {//with this only a element will have the class wich lend the yellow border
        phoenixPanel.children[i].classList.remove("selection-chosen");
    }
     e.target.classList.add("selection-chosen");//this is the class wich has the yellow border
     for (let i = 0; i < edgePanel.children.length; i++) {//with this only a element will have the class wich lend the yellow border
        edgePanel.children[i].classList.remove("selection-chosen");
    }
     edgePanel.children[computerSelection].classList.add("selection-chosen");
}

})

