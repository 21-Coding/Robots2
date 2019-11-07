function Game (){

  this.score = 0
}

//robot in funct
Game.prototype.addScore = function() {
    this.score += 1
    return this.score
  };


Game.prototype.switchUser = function() {
  math.floor(math.random(20))
  if (this.score < 10){
    this.addScore
  }else {
    false
  };
}

Game.prototype.youWin = function() {

}

$(document).ready(function() {
  var newGame = new Game();
  // var newScore = []
  $("#robotbutton").click(function(event) {
    event.preventDefault();
    newGame.addScore();

    // console.log(newGame.score);
    $("#damage").text(newGame.score);
  });

})

// function that says score has reached 100 and it is now time for new function to be ran only when the score is 100
// on click function that resides in html must make glove toggle() in UI




// math.random(50)
// user will click a button that adds score by random number, computer will also function off of similar code. Will switch() users randomly inbetween turns similar to dice roll.
// 1. switch function that is random
// 2. add function that is random
// 3. click function
// 4. branching to determine score
