$(document).ready(function() {
	var rand = [];
	for (var r = 19; r < 121; r++) {
		rand.push(r);
	}
	var pokemon = [];
	for (var p = 1; p < 13; p++) {
		pokemon.push(p);
	}
	var randNumber; 
	var pokemonNumbers = []; 
	var p1;
	var p2;
	var p3;
	var p4;
  var totalScore = 0; 
	var wins = 0;
	var losses = 0;
	function pickRandomNumber(arr) {
		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);
		console.log("random number: " + randNumber);
	}
	function pickRandomPokemon(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			pokemonNumbers.push(a);
		}
		console.log("pokemon numbers: " + pokemonNumbers);

	} 
	function pokemonValues(arr) {
		for (i = 0; i < arr.length; i++) {
		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		p1 = arr[0];
		p2 = arr[1];
		p3 = arr[2];
		p4 = arr[3];
	} 
	function gameReset(x) {
		pokemonNumbers = []; 
		pickRandomNumber(rand);
		pickRandomPokemon(pokemon);
		pokemonValues(pokemonNumbers);
		totalScore = 0;
		$("#totalNumber").html(totalScore);
	} 
	pickRandomNumber(rand);
	pickRandomPokemon(pokemon); 
	pokemonValues(pokemonNumbers);

		$("#button-1").on("click", function() {
			totalScore += p1;
			$("#totalNumber").html(totalScore);
		});
		$("#button-2").on("click", function() {
			totalScore += p2;
			$("#totalNumber").html(totalScore);
		});
		$("#button-3").on("click", function() {
			totalScore += p3;
			$("#totalNumber").html(totalScore);
		});
		$("#button-4").on("click", function() {

			totalScore += p4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		if (totalScore == randNumber) {
			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);

			gameReset();
		}
		else if (totalScore > randNumber){
			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);
			gameReset();
		}
	});

});
