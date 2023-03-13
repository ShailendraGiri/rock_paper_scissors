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
    }else if(humanChoice=="rock" && computerChoice =="paper"|| humanChoice=="paper"&& computerChoice=="scissors"||humanChoice=="scissors" && computerChoice=="rock"){
        console.log("The computer won");
    }else if (humanChoice=="rock"&& computerChoice=="scissors"||humanChoice=="paper" && computerChoice=="rock"||humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You won");
    }
}

    for(let x=1;x<=5;x++){//for 5 rounds of the game//
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        playRound(humanChoice,computerChoice);
    }




