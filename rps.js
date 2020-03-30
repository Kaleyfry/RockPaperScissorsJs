var userChoice = prompt("IN ALL CAPS: ENTER ROCK, PAPER, OR SCISSORS");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "ROCK";
}else if(computerChoice <=0.67){
    computerChoice = "PAPER";
}
else{
    computerChoice = "SCISSORS";
}
var compare = function(choice1,choice2){
    if(choice1==choice2){
        return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
    }
    if(choice1=="ROCK"){
        if(choice2=="SCISSORS"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="PAPER"){
        if(choice2=="ROCK"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="SCISSORS"){
        if(choice2=="ROCK"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
};

alert(compare(userChoice,computerChoice));