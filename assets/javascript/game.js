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
$("#guessList").html(guessList);

//psychic choices are alphabet letters in an array
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//psychic randomly chooses a letter that corresponds to an index within the length of the array
var psychicAnswer = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

//userGuess is empty variable
var userGuess;

//function resetWin
function reset(){
	//new psychicAnswer value is stored
    psychicAnswer = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
    //guessLeft is reset to 10;
    guessLeft = 10;
    //guessLeft prints to page
    $("#guessLeft").html(guessLeft);
    //guessList resets to empty array
    guessList = [];
    //guessList prints to page
    $("#guessList").html(guessList);
};

//store value of keypress into userGuess
document.addEventListener("keypress", function(e) {
    //userGuess = current key pressed
    var userGuess = e.key;
    //value of userGuess is added to guessList array
    guessList.push(userGuess);
    //guessList array is displayed on page so user sees their previous incorrect guesses
    $("#guessList").html(guessList);
    //consolelog userGuess and psychicAnswer
    console.log("user: " + userGuess);
    console.log("psychic " + psychicAnswer);

    //if userGuess matches psychicAnswer
    if (userGuess === psychicAnswer){
    	//winsCount increases by one and value is stored
    	winsCount = winsCount + 1;
    	//winsCount prints to page
    	$("#winsCount").html(winsCount);
    	//reset function runs
    	reset();
    } else if (guessLeft === 0){
    	//lossesCount increases by one and value is stored
    	lossesCount = lossesCount + 1;
    	//lossesCount prints to page
    	$("#lossesCount").html(lossesCount);
    	//reset function runs
    	reset();
    } else if (userGuess != psychicAnswer){
    	//guessLeft decreases by 1
    	guessLeft = guessLeft - 1;
    	//guessLeft prints to page
    	$("#guessLeft").html(guessLeft);
    }
});