//winsCount starts at 0
var winsCount = $("#winsCount");
var winsCount = 0;

//lossesCount starts at 0
var lossesCount = $("#lossesCount");
var lossesCount = 0;

//guessLeft starts at 9
var guessLeft = $("#guessLeft");
guessLeft = 9;

//guessList index starts at 0 and is empty array
var guessList = $("#guessList");
var guessList = [];

//psychicChoices is an array of all letters than psychic can choose from
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//psychicGuess is the choice randomly selected from psychicChoices
var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

//userGuess is the key the user pressed
var userGuess = event.key;

//when user presses a key and choices do NOT match:
	//guessLeft - 1 and losses Count +1
while (guessLeft > 0){
	if (userGuess != psychicGuess){
			guessLeft = guessLeft - 1;
		}else{
			winsCount = winsCount++;
		}

}
	

	

	
		

