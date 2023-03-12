//for human choice//
let humanChoice=prompt("please enter a choice: ");
console.log("You chose "+humanChoice);
//for computer choice//
const rps=["rock","paper","scissors"];
let x=Math.floor(Math.random()*3);
let computerChoice=rps[x];
console.log("The computer chose "+computerChoice);
//conditions for draw, win and loss
if(humanChoice==computerChoice){
    console.log("It's a draw");
}else if(humanChoice=="rock" && computerChoice =="paper"|| humanChoice=="paper"&& computerChoice=="scissors"||humanChoice=="scissors" && computerChoice=="rock"){
    console.log("The computer won");
}else if (humanChoice=="rock"&& computerChoice=="scissors"||humanChoice=="paper" && computerChoice=="rock"||humanChoice=="scissors" && computerChoice=="paper"){
    console.log("You won");
}




