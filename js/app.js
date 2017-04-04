// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var i = 0;
  var eachBox = $('.box');
  eachBox.on("click", clicked);
  	function clicked(event) {
  		if($(this).text() !== "o") {
  			if($(this).text() !== "x"){
  				if(i % 2 === 0) {
  					$(this).text("o");
  					$(this).css("background-color", "yellow");
  					$('.whosTurn').text($('.whosTurn').text().replace("Now o's turn!","Now x's turn!"));

  				} else {
  					$(this).text("x");
  					$(this).css("background-color", "pink");
  					$('.whosTurn').text($('.whosTurn').text().replace("Now x's turn!","Now o's turn!"));
  				}
  			}
  		}
  		
  		i++;

  	}

  var resetKey = $('button');
  resetKey.on("click", clickedReset);
  function clickedReset(event) {
  	$('.box').css("background-color", "");
  	$('.box').text("");
  };


	
  function whoWins(event) {
  	if($('#box1').css("background-color") === $('#box2').css("background-color") && $('#box2').css("background-color") === $('#box3').css("background-color"))  {
  		return true; 
  	} 
  
  }
  
});
