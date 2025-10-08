/***********this game will be played btwn human and computer. it has 5 rounds */

//1: write a function that returns computer choice
function getComputerChoice() {

    let number = Math.floor(Math.random() * 3 + 1)
    let choice = (number === 1) ? "Rock" : (number === 2) ? "Paper" : "Scissor";
    return choice;
}
let computerChoice = getComputerChoice();
console.log("Computer choice: " + computerChoice)

 //2: write a function that gets users choice
        let getHumanChoice = function () {
            let humanChoice = prompt("What's your choice? Rock or Paper or Scissor");

            humanChoice = humanChoice.trim();
            humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
            // console.log("choice: " + humanChoice);
            let choice = humanChoice;
            if (!((choice === "Rock" || choice === "R") || (choice === "Paper" || choice === "P") || (choice === "Scissor" || choice === "S"))) {
                alert(`please Enter A valid Choice.\n"${choice}" is not a valid option\nRock or Paper or Scissor`);
                return getHumanChoice();
            }
          
            if (choice === "Rock" || choice === "R") {
                
                return "Rock";
            } else if (choice === "Paper" || choice === "P") {
                
                return "Paper";
            } else if (choice === "Scissor" || choice === "S") {
               
                return "Scissor";
            }

            // console.log("get human ", choice)
            return getHumanChoice();
        }

        let humanChoice = getHumanChoice();
        console.log("Human choice: " + humanChoice);
        