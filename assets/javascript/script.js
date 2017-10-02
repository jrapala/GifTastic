// GifTastic | By Juliette Rapala
// =====================================================================================

$(document).ready(function(){

	// Variables 
	// =====================================================================================

	var celebrities = [
		"Michael Jackson",
		"Samuel L. Jackson",
		"Snoop Dogg",
		"Kim Kardashian",
		"Aubrey Plaza",
		"Marilyn Manson",
		"Taylor Swift",
		"Beyonce",
		"Jay-Z",
		"Jonah Hill",
		"Dwayne Johnson",
		"Drake",
		"Jennifer Lawrence",
		"Chris Pratt",
		"Adele",
		"Kanye West",
		"Justin Bieber",
		"Kit Harrington",
		"Ellen DeGeneres",
		"Chance the Rapper",
		"Amy Poehler"
	];

	// Functions 
	// =====================================================================================

	// Create buttons on top of screen using array of celebrities 
	function init() {
		for (var i = 0; i < celebrities.length; i++) {
			var $celebButton = $('<button>');
			$celebButton.attr("data-celeb", celebrities[i]);
			$celebButton.addClass("celebButton");
			$celebButton.text(celebrities[i]);
			$('#celebrityButtons').append($celebButton);
		}

		// When celebrity button is clicked, add 10 images using Giphy API
		$(".celebButton").on("click", function() {
	    	var celeb = $(this).attr("data-celeb");
	    	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + celeb + "&api_key=Su8yLiz6okgSl5WLjpwgFOMYO6U1Zf39&limit=10";

	      	$.ajax({
	        	url: queryURL,
	          	method: "GET"
	        })
	        
	        .done(function(response) {
	        	var results = response.data;

	        	for (var i = 0; i < results.length; i++) {
	        		var gifDiv = $("<div>");
	        		gifDiv.addClass('image');
	        		var rating = results[i].rating;
	        		var ratingParagraph = $("<p>")
	        		ratingParagraph.text("Rating: " + rating);
	            	var celebImage = $("<img>");
	            	celebImage.attr("src", results[i].images.fixed_height.url);

	            	gifDiv.prepend(ratingParagraph);
	            	gifDiv.prepend(celebImage);

	            	$("#celebrities").prepend(gifDiv);
	          	}
	        });
	    });
	}

	// Function Calls
	// =====================================================================================

	init();
});
