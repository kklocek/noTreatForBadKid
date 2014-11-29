//player
function Player(game) {
	var NORTH = 1;
	var EAST = 2;
	var SOUTH = 3;
	var WEST = 4;

	this.game = game;
	this.points = 0;
	this.direction = SOUTH; 


}

Player.prototype.create = function() {
	// game.load.image()
	//game.load.spritesheet();
	// itede
};

Player.prototype.update = function() {
	// body...
};

Player.prototype.preload = function() {
	// body...
};