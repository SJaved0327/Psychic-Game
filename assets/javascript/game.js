//winsCount starts at 0 and is visible in html
var winsCount = 0;
$("#winsCount").html("<h3>" + winsCount + "</h3>");

//lossesCount starts at 0 and is visible in html
var lossesCount = 0;
$("lossesCount").html("<h3>" + lossesCount + "</h3>");

//guessLeft starts at 10 and is visible in html
var guessLeft = 10;
$("#guessLeft").html("<h3>" + guessLeft + "</h3>");

//guessList index starts at 0 and is empty array
var guessList = [];
$("#guessList").html("<h3>" + guessList + "</h3>");

//psychicChoices is an array of all letters that psychic can choose from
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//psychic randomly chooses a letter from choice array
var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

//user chooses letter by pressing a key
var userGuess = event.key;

//every userGuess has to be pushed into guessList array
guessList.push(userGuess);

for (var i = 1; i <= 10; i++) {
		guessList[i];
    	guessList.push(userGuess);
   }

//when user presses a key and choices do NOT match:
	//guessLeft - 1 and losses Count +1
while (guessLeft > 0){
	if (userGuess != psychicGuess){
			guessLeft = guessLeft - 1;
		}else{
			winsCount = winsCount++;
		}

}

//when user presses a key, the game starts
document.onkeyup = function(event) {	
};

*/

	
		

