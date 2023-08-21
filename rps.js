let newHumanScore=0;
let newComputerScore=0;


const selection=document.querySelectorAll("button");//selects all the button elements//

 selection.forEach(button => {//anonymous function//
    button.addEventListener('click',() =>{
        if (newHumanScore<5 && newComputerScore<5){
        let humanChoice=button.textContent;
        const newDiv=document.querySelector("#humanChoice");
        newDiv.textContent="You chose "+button.textContent;
        
        const rps=["rock","paper","scissors"];
        let x=Math.floor(Math.random()*3);
        let computerChoice=rps[x];
        const newDiv1=document.querySelector("#computerChoice");
        newDiv1.textContent="The computer chose "+computerChoice;
    
    
                //conditions for draw, win and loss
        function playRound(humanChoice,computerChoice){
            if(humanChoice==computerChoice){
            const newDiv2=document.querySelector("#individualResult");
            newDiv2.textContent="It's a draw";
            
                return{humanScore:0,computerScore:0};
            }else if(humanChoice=="rock" && computerChoice =="paper"|| humanChoice=="paper"&& computerChoice=="scissors"||humanChoice=="scissors" && computerChoice=="rock"){
            const newDiv2=document.querySelector("#individualResult");
            newDiv2.textContent="The computer won.";
            
                return{humanScore:0,computerScore:1};
            }else if (humanChoice=="rock"&& computerChoice=="scissors"||humanChoice=="paper" && computerChoice=="rock"||humanChoice=="scissors" && computerChoice=="paper"){
            const newDiv2=document.querySelector("#individualResult");
            newDiv2.textContent="You won";
            
                return{humanScore:1,computerScore:0}
            }
        }
        let {humanScore,computerScore}=playRound(humanChoice,computerChoice);//destructuring the object//
        newHumanScore+=humanScore;
        newComputerScore+=computerScore;

        const newDiv3=document.querySelector("#humanTotal");
        newDiv3.textContent="Your total score is "+newHumanScore;
        

        const newDiv4=document.querySelector("#computerTotal");
        newDiv4.textContent="The computer's total score is "+newComputerScore;
        
        } 
        checkScores();
        function checkScores(){
        if (newHumanScore==5||newComputerScore==5) {
            const newDiv5=document.querySelector("#winnerAnnouncement");
            if(newHumanScore==newComputerScore){
                newDiv5.textContent="The result is here. The game is a draw."
            }else if (newHumanScore>newComputerScore){
             newDiv5.textContent="The result is here. You are the winner."
            }else if (newHumanScore<newComputerScore){
             newDiv5.textContent="The result is here. The computer is the winner."
            }
            setTimeout(()=>{
                const userResponse=confirm("Do you want to start a new game?");
             if (userResponse){
                location.reload();
             }
            }, 500);
             
        };
    };
 });//end of addEventListener//
});//end of forEach//
   









  


