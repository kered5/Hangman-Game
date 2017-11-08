(function () {
    // Initialize Variables
    var guess; 
    var letters;
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var lives = 7;
    var names = ["mary", "chris", "scott", "amit", "matt", "tate"]
    var output;
    var life;
    var guessInput ;
    var lettersGuessed ;
    var lettersMatched ;
    var numLettersMatched = 0;
    var currentWord ;
    var guessButton ;
    var letter ;
    var lettersToShow;

        /* Start game */
    window.onload = setup();

            function gameOver(win) {
        if (win) {
            output.innerHTML = "You Win!";
            output.classList.add("win");
        } else {
            output.innerHTML = "Game Over - You lost!";
            output.classList.add("error");
        }

        guessInput.style.display = guessButton.style.display = "none";
        guessInput.value = "";
    }

    function setup() {
        /* start  */
        lives = 7;
        lettersGuessed="";
        lettersMatched="";
        /* choose a word from the name array*/
        currentWord = names[Math.floor(Math.random() * names.length)];

        
        guessInput = document.getElementById("letter");
        output = document.getElementById("output");
        life = document.getElementById("life");


        life.innerHTML = "You have " + lives + " lives remaining";
        already.innerHTML = "You guessed : " + lettersMatched.toUpperCase() + lettersGuessed.toUpperCase();
        output.innerHTML = "";


        //document.getElementById("letter").value = "";



        /* Enable guess button */
        guessButton = document.getElementById("guess");
        guessInput.style.display = "inline";
        guessButton.style.display = "inline";

        /* set up display of letters in current word */
        letters = document.getElementById("letters");
        letters.innerHTML = '<a class="current-word">Who is this classmate?:</a><br>';

   
        for (i = 0; i < currentWord.length; i++) {
            letter = '<a class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</a>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
    }





  

    /* buttons */
    document.getElementById("restart").onclick = setup;

    /* reset letter to guess on click */
    guessInput.onclick = function () {
        this.value = "";
    };

    /* main guess function when user clicks #guess */



    document.getElementById("hangman").onsubmit = function (e) {
        if (e.preventDefault) e.preventDefault();
        output.innerHTML = "";
        output.classList.remove("error", "warning");
        guess = guessInput.value;

       console.log (currentWord);
       console.log (numLettersMatched);
       console.log (guessInput);
       console.log (guess);
       console.log (letter);
       console.log (letters);
       console.log (output);
       console.log (lettersGuessed);
       console.log (lettersMatched);
       console.log (life);


        /* does guess have a value? if yes continue, if no, error */
        if (guess) {
            /* is guess a valid letter? if so carry on, else error */

            if (alphabet.indexOf(guess) > -1) {

                /* has it been guessed (missed or matched) already? if so, abandon & add notice */
                if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + "Already guessed, try again!";
                    output.classList.add("warning");
                }
                /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
                else if (currentWord.indexOf(guess) > -1) {

                    
                    lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());


                    for ( i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }

                    /* check to see if letter appears multiple times */
                    for ( j = 0; j < currentWord.length; j++) {
                        if (currentWord.charAt(j) === guess) {
                            numLettersMatched += 1;
                        }
                    }

                    lettersMatched += guess;
                    if (numLettersMatched === currentWord.length) {
                        gameOver(true);
                    }
                }
                /* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user */
                else {
                    lettersGuessed += guess;
                    lives--;
                    life.innerHTML = "You have " + lives + " lives remaining";
                    already.innerHTML = "You guessed : " + lettersMatched.toUpperCase() + lettersGuessed.toUpperCase();
                    if (lives === 0) gameOver(false);
                }
            }
            /* not a valid letter, error */
            else {
                output.classList.add("error");
                output.innerHTML = "Enter a letter from a-z";
            }
        }
        /* no letter entered, error */
        else {
            output.classList.add("error");
            output.innerHTML = "Enter a letter from a-z";
        }
        return false;
    };



}());
         
