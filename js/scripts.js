var sound = new Audio();
sound.src ="music/explosion.mp3";
var total = 0;

function Players(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.dice = function(){
    return Math.floor(Math.random() * 6 + 1);
  }
  this.total = function(){
    return total += (this.dice());
  }
}




$(document).ready(function(){
  $("#start-game").click(function() {
    event.preventDefault();
    var playerOneName = $("#playerOne").val();
    var playerTwoName = $("#playerTwo").val();
    var newPlayers = new Players(playerOneName, playerTwoName);


    $("#page1").fadeOut();
    $("#page2").fadeIn();
    $("#p1Name").append(newPlayers.player1);
    $("#p2Name").append(newPlayers.player2);
    $("#roll").click(function(){
      event.preventDefault();
      $("#current-score").text(newPlayers.dice());
      $("#round-score").text(newPlayers.total());
    });

    $("#hold").click(function(){
      var finalTotal = newPlayers.total();
      $("#score").text(finalTotal);
      event.preventDefault();

  });


  });

});
