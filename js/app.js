$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function() {
  	  playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  	.animate(
    	{'left': '1020px'},
    	500,
    	function() {
      		$(this).hide();
      		$(this).css('left', '520px');
    	}); 
  	})
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    $('body').keydown(function(event){ // how do I know it's still referencing the ".ryu" class? i definately broke it after adding this
    	if(event.keyCode === 88){
    		playSaxMusic();
    	  $('.ryu-throwing').hide();
    	  $('.ryu-ready').hide();
    	  $('.ryu-cool').show();
        $('.ryu-still').hide();
    	}
    })
    .keyup(function(event){
      if(event.keyCode===88){
        $('#saxaphone-music')[0].pause();
        $('.ryu-cool').hide();
        $('.ryu-still').show();
      }
    });

  
});

//definately confused on where the final " })" should be
// and where to put and NOT to put the semi colon

//where should I put:
// $('.instructions').show();

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playSaxMusic(){
	$('#saxaphone-music')[0].volume = 0.5;
    // $('#saxaphone-music')[0].load();
    $('#saxaphone-music')[0].play();


}






















