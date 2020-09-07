
let userAnswer = ""
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userAnswer = button.className;
        compare(userAnswer, compInput());
    })
})




//store computer random input
function compInput() {
    let choices = ["scissors", "paper", "rock"]
    let choiceInt = Math.floor(Math.random() * 3);
    return choices[choiceInt]
}



//compare answers

function compare(user, comp) {
    let result = 0;
    let textResult = "";
    const answers = document.querySelector('.answers');
    
    // inform user of comp choice
    console.log(`The computer has chosen ${comp}`)
    
    //if tie 
    if (user === comp) {
        textResult = `TIE: ${user} VS ${comp}`;
        
    } 
    //if user wins
    else if ((user === "scissors" && comp === "paper") ||
                (user === "paper" && comp === "rock") ||
                (user === "rock" && comp === "scissors")) {
                    
                    
                    textResult = `User WINS: ${user} VS ${comp}`;
                    result++
    } 
    //if computer wins
    else if ((user === "scissors" && comp === "rock") ||
                (user === "paper" && comp === "scissors") ||
                (user === "rock" && comp === "paper")) {
                    
                    
                    textResult = `Computer WINS: ${user} VS ${comp}`;
                    result--
                }
    answers.textContent = textResult;
    return result;
} 

//return result of game
/*function fiveGameMatch() {
    //define variables for winning or losing a game
    let win = 0;
    let lose = 0;
    //loops through five games adding to respective variables based on result
    for (let round = 1;round<=5;round++) {
        let result = compare(getInput(),compInput());
        if (result > 0) {
            win++
        } else if (result < 0) {
            lose++
        } 
        console.log(`User wins: ${win}\nComputer wins: ${lose}`)
    }
    //determines over all winner based on win/lose variables
    if (win == lose) {
        console.log(`You have tied with the computer on ${win}`)
    } else if (win > lose) {
        console.log(`Nice work you won ${win} out of 5.`)
    } else if (win < lose) {
        console.log(`Sorry the computer won ${lose} out of 5.`)
    }
}
fiveGameMatch()*/
