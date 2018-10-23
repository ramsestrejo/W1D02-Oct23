

let doors;
let doorWithCar;


// host asks player to make a pick
let userChoice = process.argv.slice( 2 );
let userChoiceInt = Number.parseInt( userChoice );


// 3 door game
// 1 car behind one of the doors
// one door can be opened at once
// one player
// one host who knows where the car is
function initGame( ) {
	doors = [ "Goat" , "Goat" , "Goat" ];
	doorWithCar = Math.ceil( Math.random( ) * 3 );
	doors[ doorWithCar - 1 ] = "Car";
}




let player1Choice = userChoiceInt;
let player2Choice = userChoiceInt
let hostChoice;

// players and host  make selection
function makeChoices( choice ) {
	player1Choice = choice;
	// host opens door that does not have car and was not selected by player
	if ( player1Choice != 1 && doorWithCar != 1 ) {
		hostChoice = 1;
	}
	else if ( player1Choice != 2 && doorWithCar != 2 ) {
		hostChoice = 2;
	}
	else {
		hostChoice = 3;
	}
	// host asks do you want to switch doors?
	// 2 scenarios : stays put or switches to the other door
	if ( player1Choice != 1 && hostChoice != 1 ) {
		player2Choice = 1;
	}
	else if ( player1Choice != 2 && hostChoice != 2 ) {
		player2Choice = 2;
	}
	else {
		player2Choice = 3;
	}
}

// host reveals the winning door
function displayResults( ) {
	console.log( "Doors:" , doors );
	console.log( "Player 1 : " , player1Choice );
	console.log( "Player 2 : " , player2Choice );
	console.log( "Host : " , hostChoice );
}

function checkResults( ) {
	if ( player1Choice === doorWithCar ) {
		player1Wins++;
	}
	if ( player2Choice === doorWithCar ) {
		player2Wins++;
	}
}

let player1Wins = 0;
let player2Wins = 0;
for ( let i = 0 ; i < 1000 ; i ++ ) {
	initGame( );
	makeChoices( Math.ceil( Math.random( ) * 3 ) );
	checkResults( );
	displayResults( );
}

console.log( "Player 1 won " , player1Wins , " times");
console.log( "Player 2 won " , player2Wins , " times");




