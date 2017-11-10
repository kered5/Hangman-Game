

   // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  var classmates = ["chris", "mary", "amit", "matt", "will", "scott", "mason", "james", "jon", "vincent","desiree","danielle","holly", "court", "jeff","michael","tate","will","carlos","ari"];

   var lives = 7;
   var userWin = 0;
   var namelength = 0;
   var solution=[];
   var exist;
   var guessed=[];
   var match;
   var numLettersMatched;
   var matches =0;
   var wins=0;
   var mysterymate;
   var joined;

   startgame();

function startgame(){

    lives = 7;
    namelength = 0;
    solution=[];
    exist;
    guessed=[];
    match;
    numLettersMatched;
    matches =0;
      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.getElementById("compchoice").textContent = mysterymate;

      mysterymate = classmates[Math.floor(Math.random() * classmates.length)];
      document.getElementById("guesses").textContent = "";

       namelength = mysterymate.length;

       for (i=0 ; i < namelength; i++){

        solution.push("_ ");

       }
       joined = solution.join(" ");

 document.getElementById("classmate").textContent = joined;
 document.getElementById("lives").textContent = lives;

 function gameOver(win){
    if (win){
        wins++;
        document.getElementById("game").innerHTML = "<h1 id='header'>"+"Winner!!!!!"+"</h1>";
        document.getElementById("wins").textContent = wins;
        document.getElementById("compchoice").textContent = mysterymate;
        startgame();

    }
    else {

        document.getElementById("game").innerHTML = "<h1 id='header'>"+"Sorry...you lost!"+"</h1>";
        startgame();
    }
 }

   // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

     // Determines which key was pressed.
      var userGuess = event.key;
      var code = event.keyCode;

document.getElementById("game").innerHTML = "<h1 id='header'>"+"Keep guessing"+"</h1>";
//Check if user input is an actual letter
      if (code > 64 && code < 91) {

        //Check if the letter has been guessed before

            if( guessed.indexOf(userGuess) == -1){

            //Add letter to guessed letter array
            guessed.push(userGuess);
            document.getElementById("guesses").textContent = guessed;

            //See if letter is in the name, if so add it to the name on screen
            match = mysterymate.indexOf(userGuess)


                if( match > -1){
                //Check to see if letter appears more than once

                for(j=0; j < namelength; j++){
                    if (mysterymate[j] === userGuess){
                        solution[j] = userGuess;
                        matches++;
                    }
                    if (matches == namelength){
                        gameOver(true);
                    }

                }
                //solution[match]= userGuess;

                joined = solution.join(" ");
                document.getElementById("classmate").textContent = joined;

                //Check to see if letter appears more than once
                }
                else{
                    lives--;
                    document.getElementById("lives").textContent = lives;
                    if(lives==0){
                      gameOver(false);
                    }
                }
   }

      }



     // Alerts the key the user pressed (userGuess).
    //document.getElementById("choice").textContent = userGuess;
    





   };
         
}