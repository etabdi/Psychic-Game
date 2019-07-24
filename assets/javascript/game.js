var alphabet = [" a "," b "," c "," d "," e "," f "," g ",
                " h "," i "," j "," k "," l "," m "," n ",
                " o "," p "," q "," r "," s "," t "," u ",
                " v "," w "," x "," y "," z "];
    


        var wins = 0;
        var losses = 0;
        var guesses = 15;
        var userGuess=[];

            // user press key will generate alphabets
        document.onkeyup = function(event) {
            var yourGuess = event.key; 
              //Capture letters entered by the user  
        userGuess.push(yourGuess);                  

        document.getElementById('yourGuess').innerHTML=userGuess;
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
                 //console logging 
                console.log(computerChoice)
                console.log(yourGuess)
                console.log(guesses)

            //chech computer choise and user guss same
        if(yourGuess===computerChoice){
         wins++;
            
        }

        else{
         guesses--;
        
        
        }
    
        if(guesses == 0){
            losses++;
           guesses=13;
              alert(losses);
              reset(userGuess);
               userGuess=[];

            
              console.log(guesses);
        }
        function reset() {
            
             
             guesses = 8;
           
        }
  
    console.log(losses);
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses Left:"+ ""+ guesses;
    
    }