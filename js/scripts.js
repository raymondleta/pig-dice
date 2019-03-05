//Business Logic

var sound = new Audio();
sound.src ="music/explosion.mp3";
var total = 0;

function Players(player){
  this.player = player;
  this.dice = function(){
    return Math.floor(Math.random() * 6 + 1);
  }
  this.total = function(){
    return total += (this.dice());
  }
}



//ui logic 
$(document).ready(function(){
  $("#start-game").click(function() {
    event.preventDefault();
    var playerOneName = $("#playerOne").val();
    var newPlayers = new Players(playerOneName);


    $("#page1").fadeOut();
    $("#page2").fadeIn();
    $("#p1Name").append(newPlayers.player );
    $("#roll").click(function(){
      event.preventDefault();
      $("#current-score").text(newPlayers.dice());
      $("#round-score").text(newPlayers.total());
    });

    $("#hold").click(function(){
      var finalTotal = newPlayers.total();
      $("#score").text(finalTotal);
      $("#round-score").text(0);
      event.preventDefault();

  });

  var playerTwoName =$("#playerTwo").val();
  var newPlayers2 = new Players(playerTwoName);

  $("#p2Name").append(newPlayers2.player);
  $("#roll2").click(function(){
    event.preventDefault();
    $("#current-score2").text(newPlayers2.dice());
    $("#round-score2").text(newPlayers2.total());
  });


  });

});
