let newHumanScore=0;
let newComputerScore=0;
console.log("Welcome to the rock, paper, scissors game.")
console.log("The game will be played for 5 rounds and the winner will be decided.")
console.log("Please enter a choice between rock, paper and scissors.")
//for human choice//
function getHumanChoice(){
    let humanChoice=prompt("please enter a choice: ");
    humanChoice=humanChoice.toLowerCase();
    console.log("You chose "+humanChoice);
    return humanChoice;
}

//for computer choice//
function getComputerChoice(){
    const rps=["rock","paper","scissors"];
    let x=Math.floor(Math.random()*3);
    let computerChoice=rps[x];
    console.log("The computer chose "+computerChoice);
    return computerChoice;
}
    


//conditions for draw, win and loss
function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        console.log("It's a draw");
        return{humanScore:0,computerScore:0};
    }else if(humanChoice=="rock" && computerChoice =="paper"|| humanChoice=="paper"&& computerChoice=="scissors"||humanChoice=="scissors" && computerChoice=="rock"){
        console.log("The computer won");
        return{humanScore:0,computerScore:1};
    }else if (humanChoice=="rock"&& computerChoice=="scissors"||humanChoice=="paper" && computerChoice=="rock"||humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You won");
        return{humanScore:1,computerScore:0}
    }
}

    for(let x=1;x<=5;x++){//for 5 rounds of the game//
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        let {humanScore,computerScore}=playRound(humanChoice,computerChoice);//destructuring the object//
        newHumanScore+=humanScore;
        newComputerScore+=computerScore;
    }
    console.log("Here is the result of the game.");
    console.log("Your total score is "+newHumanScore);
    console.log("The computer's total score is "+newComputerScore);
    if(newHumanScore==newComputerScore){
        console.log("It's a draw");
    }else if (newHumanScore>newComputerScore){
        console.log("You won");
    }else if (newHumanScore<newComputerScore){
        console.log("The computer won");
    }




