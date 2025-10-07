/***********this game will be played btwn human and computer. it has 5 rounds */

 //1: write a function that returns computer choice
        function getComputerChoice() {

            let number = Math.floor(Math.random() * 3 + 1)
            let choice = (number === 1) ? "Rock" : (number === 2) ? "Paper" : "Scissor";
            return choice;
        }
        let computerChoice = getComputerChoice();
        console.log("Computer choice: " + computerChoice)