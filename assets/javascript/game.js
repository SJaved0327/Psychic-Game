//winsCount starts at 0 and is visible in html
var winsCount = 0;
$("#winsCount").html(winsCount);

//lossesCount starts at 0 and is visible in html
var lossesCount = 0;
$("#lossesCount").html(lossesCount);

//guessLeft starts at 10 and is visible in html
var guessLeft = 10;
$("#guessLeft").html(guessLeft);


//guessList index starts at 0 and is empty array
var guessList = [];

//psychic choices are alphabet letters in an array
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//psychic randomly chooses a letter that corresponds to an index within the length of the array
var psychicAnswer = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

/*
$('textarea').keydown(function(e) {
    var userGuess = e.which;
    console.log(userGuess);
})
*/

var userGuess;

document.addEventListener("keypress", function(e) {
            var userGuess = e.key;
            console.log(userGuess);
});


//document.on(keyPress, userGuess);

//console.log(userGuess);
	



//when page loads, it runs reset code
//	winsCount = winsCount;
//	lossesCount = lossesCount;
//	guessLeft = 10;
//	guessList = [];
//	psychicAnswer;

//when key is pressed, it becomes userGuess
//document.onkeyup()








//var userGuess = document.addEventListener("keypress");



















//guess to be input by user
//var userGuess = "";
//userGuess = document.onkeyup.value;


/*
//reset function to be called after each round
function reset(){
	winsCount = winsCount;
	lossesCount = lossesCount;
	guessLeft = 10;
	guessList = [];
};
*/

// For-Loop that will repeat 10 times.
// User only gets 10 attempts until the game resets
/*
for (var i = 0; i < 3; i++) {
	
	var guessLeft = 10;

	userGuess = prompt("guess a letter!");
	// userGuess is stored in guessList
    userGuess = guessList[i];
    // It then takes the userGuess and adds the value to the end of the guessList array
   	guessList.push(userGuess);
   	// It prints the updated array onto the document
    $("#guessList").html(guessList);
    // number of guesses left decreases by 1
    guessLeft = guessLeft - 1;
}
*/

/*
var i = 0;

document.onkeyup = function Guess(){
	userGuess = prompt("guess a letter!");
	// userGuess is stored in guessList
    userGuess = guessList[i];
    // It then takes the userGuess and adds the value to the end of the guessList array
   	guessList.push(userGuess);
   	// It prints the updated array onto the document
    $("#guessList").html(guessList);
    // number of guesses left decreases by 1
    i++;
    guessLeft = guessLeft - 1;
};
*/

/*
// if userGuess does not equal psychicAnswer AND guessLeft hasn't hit 0
if (userGuess === psychicAnswer){
	winsCount++;
	//reset();
} else if (guessLeft === 0){
	lossesCount++;
	//reset();
}
*/

/*

document.onkeydown = function (e) {
  var keyPress;

  if (typeof event !== 'undefined') {
    keyPress = event.keyCode;
  }
  else if (e) {
    keyPress = e.which;
  }

  guesList.push(String.fromCharCode(keyPress));

  return false;   // Prevents the default action
};

*/

//user chooses letter by pressing a key
//var userGuess = event.key;
/*
		if (guessLeft = 10){
		//psychic randomly chooses a letter that corresponds to an index within the length of the array
			var psychicAnswer = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
		}else{
			psychicAnswer = psychicAnswer;
		}

		/*
		for (var i = 0; i < 11; i++) {
				guessList[i];
		    	guessList.push(userGuess + "");
		   }
		  
	};
*/
/*


//resets the game
	function reset(){
		winsCount = 0;
		lossesCount = 0;
		guessLeft = 10;
		guessList = [];
	};

//every userGuess has to be pushed into guessList array
		for (var i = 1; i <= 10; i++) {
				guessList[i];
		    	guessList.push(userGuess);
		   }


		//console.log(userGuess);
		
	
	//game can be played as long as guessLeft is greater than 0
		//if user presses a key and choices do NOT match:
			//guessLeft - 1
		while (guessLeft > 0){
		if (userGuess != psychicGuess){
				guessLeft = guessLeft - 1;
			}else{
				winsCount = winsCount++;
			}
		}
		//if guessLeft = 0 then player loses
			//lossesCount + 1
		if (guessLeft = 0){
			lossesCount + 1
		}
		//if guessLeft = 0 then game resets
			//callback reset function
		if (guessLeft = 0){
			reset();
			}

*/
	

