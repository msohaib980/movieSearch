
'use strict';

$(document).ready(init);
var movieArr = [];
function init(){
	$('#click').click(clickButton);

}


function clickButton(){

	var title = createUrl();

	$.ajax('http://www.omdbapi.com/?t=' + title, {
		success: function (data){
			console.log(data)
			makeCard(data);
			

		}
	})
}

function makeCard(data) {
	var $card = $('<div>').addClass('.card');
	var $img = $('<img>');
	$img.attr('src', data.Poster);
			
	$('#output').append($img);
	var $title = $('<p>').text(data.Title);
	var $year = $('<p>').text(data.Year);
	var $plot = $('<p>').text(data.Plot);
	$('#output').append($title);
	$('#output').append($year);
	$('#output').append($plot);




	// var $card = makeCard(data);
	// $('#output').append($card);
}

function createUrl() {
	var valueOfMov = $('#searchMovie').val().toLowerCase().trim();
	return valueOfMov;
}


