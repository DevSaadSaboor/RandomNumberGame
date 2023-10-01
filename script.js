'use strict';
let score = 20;
let randomNumber  = Math.floor(Math.random() * 21 );
let highscore = 0;
// document.querySelector(".number").textContent = randomNumber;


document.querySelector(".check").addEventListener("click" , function() {
    const guessNumber = Number(document.querySelector(".guess").value);
  
   
    if(!guessNumber) {
        document.querySelector(".message").textContent = "No Number 🚩"
    
    }else if (guessNumber === randomNumber) {
        document.querySelector(".message").textContent = "Correct Number 😜"
        document.body.style.backgroundColor = "green"
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".number").style.width = "30%"
        /* `let highestScore = score - highscore` is calculating the highest possible score that can be
        achieved in the game. It subtracts the current highscore from the maximum score (which is 20
        in this case) to get the remaining score that can be achieved. This value is then assigned
        to the `highestScore` variable. */
        /* The line `let highestScore = score - highscore` is calculating the highest possible score
        that can be achieved in the game. It subtracts the current highscore from the maximum score
        (which is 20 in this case) to get the remaining score that can be achieved. This value is
        then assigned to the `highestScore` variable. */
        let highestScore =  score - highscore
        document.querySelector(".highscore").textContent = highestScore


    }else if (guessNumber > randomNumber) {
        if(score > 0 ) {
            document.querySelector(".message").textContent = "Too High 📈";
            score--
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".score").textContent = "You lost 💥";
        }
    }else if (guessNumber < randomNumber) {
        if(score > 0 ) {
            document.querySelector(".message").textContent = "Too Low 📉";
            score--;
            document.querySelector(".score").textContent = score;
        }else {
            document.querySelector(".score").textContent = "You lost 💥";
        }
    }
})
document.querySelector(".again").addEventListener("click", function() {
    document.body.style.backgroundColor = "#333"
    document.querySelector(".number").textContent = "?"
    document.querySelector(".score").textContent = 20; 
    document.querySelector(".guess").value = ""; 
})
