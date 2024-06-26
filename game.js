// script.js

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        userChoiceDisplay.textContent = `Votre choix: ${convertChoice(userChoice)}`;
        computerChoiceDisplay.textContent = `Choix de l'ordinateur: ${convertChoice(computerChoice)}`;
        resultDisplay.textContent = `Résultat: ${result}`;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Égalité!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "Vous gagnez!";
    } else {
        return "Vous perdez!";
    }
}

function convertChoice(choice) {
    switch (choice) {
        case "rock":
            return "Pierre";
        case "paper":
            return "Papier";
        case "scissors":
            return "Ciseaux";
    }
}