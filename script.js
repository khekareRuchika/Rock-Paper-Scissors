let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
// console.log(choices)

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice= () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerHTML = "Game was draw. Play Again."
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    
    if(userWin){
        console.log("you win!");
        msg.innerHTML = `You Win! ${userChoice} beats ${compChoice}!`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerHTML = userScore;
    }
    else{
        console.log("you lose");
        msg.innerHTML=`You lose! ${compChoice} beats ${userChoice}!`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerHTML= compScore;
    }
}

const playGame = (userChoice)=>{
    console.log("user choice= ", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice = ", compChoice);
    
    if(userChoice ===compChoice){
        drawGame();
        
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice==="paper"? false:true;
        }
        else if(userChoice ==="paper"){
            userWin = compChoice==="scissors"?false:true;
        }
        else if(userChoice ==="scissors"){
            userWin = compChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    if(userScore ===5 || compScore===5){
        if(userScore>compScore){
            msg.innerHTML= "You win!!!!";
        }
        else{
            msg.innerHTML="You lose!!!"

        }
        userScore = 0;
        compScore = 0;
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
        const userChoice = choice.getAttribute('id');
        // console.log(userChoice)
        playGame(userChoice);
    });
});

