/***********this game will be played btwn human and computer. it has 5 rounds */
function playGame() {
    //1: write a function that returns computer choice
    function getComputerChoice() {

        let number = Math.floor(Math.random() * 3 + 1)
        let choice = (number === 1) ? "Rock" : (number === 2) ? "Paper" : "Scissor";
        return choice;
    }
    let computerChoice = getComputerChoice();
    // console.log("Computer choice: " + computerChoice)

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
    // console.log("Human choice: " + humanChoice);


    //4: Write the logic to play a single round
    function playRound(human, computer) {

        if ((human === "Rock" && computer === "Rock") || (human === "Paper" && computer === "Paper") || (human === "Scissor" && computer === "Scissor")) {
            alert(`human: ${human} Vs computer: ${computer}\nIts a tei. Play again!`);
            console.log(`human: ${human} Vs computer: ${computer}\nIts a tei...🤝🤝🤝 Play again!`);
        } else if ((computer === "Paper" && human === "Rock") || (computer === "Scissor" && human === "Paper") || (computer === "Rock" && human === "Scissor")) {
            computerScore++;
            alert(`🤖Compter Wins!.. ${computer} beats ${human}\nScores ---> Human = ${humanScore} VS computer = ${computerScore}`);
            console.log(`🤖Compter Wins!..🎉🎉🎉 ${computer} beats ${human}\nScores ---> Human = ${humanScore} VS computer = ${computerScore}`);
        } else {
            humanScore++;
            alert(`👨Human Wins!.. ${human} beats ${computer}\nScores ---> Human = ${humanScore} VS computer = ${computerScore}`);
            console.log(`👨Human Wins!..🎉🎉🎉 ${human} beats ${computer}\nScores ---> Human = ${humanScore} VS computer = ${computerScore}`);
        }

    }
    playRound(humanChoice, computerChoice);
}

//3: declare players scores vars and intiallize from 0.
let humanScore = 0;
let computerScore = 0;

//5: Write the logic to play the entire game Your game will play 5 rounds
for (let i = 1; i <= 5; i++) playGame()

console.log(`\n*****final score:******\nHuman = ${humanScore} VS computer = ${computerScore}\n\n`)
let winner = (computerScore > humanScore) ? "Winner : 🤖Computer🥳🎊" : (humanScore > computerScore) ? "Winner : 👨Human🥳🎊" : "Its a tei. Every Body Wins🤗🫂🥳🎊🥳🎊";
alert(`\n*****final score:******\nHuman = ${humanScore} VS computer = ${computerScore}\n\n${winner}`)
console.log(winner)
