var sound = new Audio();
sound.src ="music/explosion.mp3";

$(document).ready(function(){
  var player1= $("#player1").val();
  var player2= $("#player2").val();

  $("#start-game").click(function(){
    event.preventDefault();
    $("#page1").fadeOut();
    $("#page2").fadeIn();
    


  });

});
