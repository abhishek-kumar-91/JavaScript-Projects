const form = document.querySelector("#fGame");

const submit = document.querySelector("#submit");
const end = document.querySelector("#end");
const previousGuess = document.querySelector("#prreviousGuess");
const remaining = document.querySelector("#remaining");
const results = document.querySelector("#results");

const playGame = true;
let remainingCount = "";
let arr = [];
const randomNumber = parseInt(Math.random()*100+1);



submit.addEventListener('click', function(e){
    e.preventDefault();
    const inputUser = parseInt(document.querySelector("#inputUser").value);
    if(inputUser === 2){
        results.innerHTML = "Enter the valid number";
    }
   
})