
var computer = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = [];
var myGuesses ="";
var computerGuesses = "";  

function htmlText(){
    
    document.getElementById("p-wins").innerHTML ="Wins: " + wins;
    document.getElementById("p-losses").innerHTML = "Losses: " + losses;
    document.getElementById("p-guessesleft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("p-yourGuesses").innerHTML = "Your Guesses so far: " +yourGuesses.join(", ");
}
    

function startGame(){
    computerGuesses = computer [Math.floor(Math.random() * computer.length)];
    guessesLeft = 10;
    yourGuesses = [];
}

htmlText();
startGame();

document.onkeypress = function(event) {
    
    var myGuesses = event.key.toLowerCase();
    
    if (computerGuesses === myGuesses && guessesLeft > 1) {
        
        wins ++;
        
        startGame();
    } else if (computerGuesses !== myGuesses && guessesLeft >1){
        
        guessesLeft --;  
        yourGuesses.push(myGuesses);
    } else {
        
        losses++;
        startGame();
    }



    htmlText();

};


