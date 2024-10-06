let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore1=document.querySelector("#user-score");
const compScore1=document.querySelector("#comp-score");


const ganCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
     msg.innerText="Game was draw, Play again!"
     msg.style.backgroundColor="black";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        msg.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScore1.innerText=userScore;
    }
    else
    {
        msg.innerText=`You loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScore1.innerText=compScore;
    }
}

const playGame=(userChoice)=>{ 
     //generate computor choice
     const compChoice = ganCompChoice();


     if(userChoice===compChoice)
    {
        //draw game
        drawGame();
    } 
     else
     {
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice=="paper")
        {
            userWin = compChoice === "scissors"?false:true;
        }
        else
        {
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
    })
})