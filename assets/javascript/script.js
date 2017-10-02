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
	    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + celeb + "&api_key=Su8yLiz6okgSl5WLjpwgFOMYO6U1Zf39&limit=10";

	      	$.ajax({
	        	url: queryURL,
	          	method: "GET"
	        })
	        
	        .done(function(response) {
	        	var results = response.data;

	        	for (var i = 0; i < results.length; i++) {
	        		var gifDiv = $("<div>");
	        		var rating = results[i].rating;
	        		var ratingParagraph = $("<p>")
	        		ratingParagraph.text("Rating: " + rating);
	            	var celebImage = $("<img>");
	            	celebImage.addClass('celebImage');
	            	var stillImage = results[i].images.fixed_height_still.url
	            	var animatedImage = results[i].images.fixed_height.url
	            	celebImage.attr("data-still", stillImage);
	            	celebImage.attr("data-animate", animatedImage);
	            	celebImage.attr("data-state", "still");
	            	celebImage.attr("src", stillImage);
	            	gifDiv.prepend(ratingParagraph);
	            	gifDiv.prepend(celebImage);
	            	$("#celebrities").prepend(gifDiv);
	            	//console.log(response);
	          	}
	          	
	        	$(".celebImage").on('click', function () {
	        		var state = $(this).attr('data-state');  
	    			if (state === "still") {
          				$(this).attr('data-state', 'animate');
          				$(this).attr('src', $(this).attr('data-animate'));
          				console.log($(this).attr('data-state'));	  
        			};
        
        			if (state === "animate") {
          				$(this).attr('data-state', 'still');
          				$(this).attr('src', $(this).attr('data-still'));
        			};
	        	});
	        });
	    });
	}


	// Function Calls
	// =====================================================================================

	init();


});
