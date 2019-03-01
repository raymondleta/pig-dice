var sound = new Audio();
sound.src ="music/explosion.mp3";

function myFunction() {
  var playerOne = document.getElementById("playerOne").value;
  document.getElementById("p1Name").innerHTML = playerOne;
  var playerTwo = document.getElementById("playerTwo").value;
  document.getElementById("p2Name").innerHTML = playerTwo;
};

$(document).ready(function(){
  $("#start-game").click(function(){
    event.preventDefault();
    $("#page1").fadeOut();
    $("#page2").fadeIn();
});
  $("#roll").click(function(){
    var dice  = Math.floor(Math.random() * 6 + 1);
    $("#current-score").text(dice);
    event.preventDefault();
  });
  $("#roll2").click(function(){
    var dice2  = Math.floor(Math.random() * 6 + 1);
    $("#current-score2").text(dice2);
    event.preventDefault();
  });

});
