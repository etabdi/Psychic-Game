var alphabet = ["a","b","c","d","e","f","g",
                "h","i","j","k","l", "m","n",
                "o","p","q","r","s","t","u",
                "v","w","x","y","z"];
    
                var wins = 0;
                var losses = 0;
                var guesses = 10;
                var userGuess=[];
        
                   
        document.onkeyup = function(event) {
            var yourGuess = event.key; 
              //Capture letters entered by the user  
        userGuess.push(yourGuess);                  

        document.getElementById('yourGuess').innerHTML=userGuess;
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
                 //console logging 
                console.log(computerChoice)
                console.log(yourGuess)
              

            //chech computer choise and user guss same
        if(yourGuess===computerChoice){
         wins++;
         console.log(wins);
            
        }

        else{
         guesses--;
        
        
        }
    
        if(guesses == 0){
            losses++;
           guesses=10;
              alert("---------Game Over-----");
              reset(userGuess);
               userGuess=[];

            
             
        }
        function reset() {
            
             
             guesses = 10;
           
        }
  
    
    document.getElementById('wins').innerHTML = "Wins:" + wins;
    document.getElementById('losses').innerHTML = "losses:" + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses Left:"+ ""+ guesses;
    
    }