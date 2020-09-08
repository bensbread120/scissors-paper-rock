




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
    const answers = document.querySelector('#answers');
    
    // inform user of comp choice
    console.log(`The computer has chosen ${comp}`)
    
    //if tie 
    if (user === comp) {
        textResult = `TIE: ${user} VS ${comp}`;
        result = "tie";
        
    } 
    //if user wins
    else if ((user === "scissors" && comp === "paper") ||
                (user === "paper" && comp === "rock") ||
                (user === "rock" && comp === "scissors")) {
                    
                    
                    textResult = `User WINS: ${user} VS ${comp}`;
                    result = "win";
    } 
    //if computer wins
    else if ((user === "scissors" && comp === "rock") ||
                (user === "paper" && comp === "scissors") ||
                (user === "rock" && comp === "paper")) {
                    
                    
                    textResult = `Computer WINS: ${user} VS ${comp}`;
                    result = "lose";
                }
    answers.textContent = textResult;
    answers.classList.add(result);
    return 1;
    
} 


function checkForFive(result, wins, loses) {
    if (result >= 5) {
        let finishingText = "";
        
        if (wins == loses) {
            finishingText = `You tied on ${wins} out of five`;
        } else if (wins>loses) {
            finishingText = `Congratulations you won on ${wins} out of five`;
        } else {
            finishingText = `Better luck next time, the computer beat you ${loses} out of five`;
        }
        
        answers.textContent = finishingText;
        result-=5;
        match();
    }
    return result;
}


function checkWinner(wins, loses) {
    if (answers.classList.contains('win')) {
        wins++;
        answers.classList.remove('win');
    } else if (answers.classList.contains('lose')) {
        loses++;
        answers.classList.remove('lose');
    } else {
        answers.classList.remove('tie');
    }
    return [wins, loses]
}


function match() {
    let userAnswer = "";
    let result = 0;

    let wins = 0;
    let loses = 0;
    
    let scissorsBut = document.getElementById('scissors');
    let rockBut = document.getElementById('rock');
    let paperBut = document.getElementById('paper');   

    let roundCount = document.getElementById('roundCounter')

    
    scissorsBut.addEventListener('click', function() {
        result += compare("scissors", compInput());//will return win lose or tie
        
        if (answers.classList.contains('win')) {
            wins++;
            answers.classList.remove('win');
        } else if (answers.classList.contains('lose')) {
            loses++;
            answers.classList.remove('lose');
        } else {
            answers.classList.remove('tie');
        }
        roundCount.textContent = (`wins ${wins} loses: ${loses}`);
        result = checkForFive(result, wins, loses);
        
    }) 
    rockBut.addEventListener('click', function() {
        result += compare('rock', compInput());
        
        if (answers.classList.contains('win')) {
            wins++;
            answers.classList.remove('win');
        } else if (answers.classList.contains('lose')) {
            loses++;
            answers.classList.remove('lose');
        } else {
            answers.classList.remove('tie');
        }
        roundCount.textContent = (`wins ${wins} loses: ${loses}`);
        result = checkForFive(result, wins, loses);
        
    })          
    paperBut.addEventListener('click', function() {
        result += compare('paper', compInput());  
        
        if (answers.classList.contains('win')) {
            wins++;
            answers.classList.remove('win');
        } else if (answers.classList.contains('lose')) {
            loses++;
            answers.classList.remove('lose');
        } else {
            answers.classList.remove('tie');
        }
        roundCount.textContent = (`wins ${wins} loses: ${loses}`);
        result = checkForFive(result, wins, loses);
        
    }) 
}
match();