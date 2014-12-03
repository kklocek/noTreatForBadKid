//player
function Player(game) {
	var NORTH = 1;
	var EAST = 2;
	var SOUTH = 3;
	var WEST = 4;

	this.game = game;
	this.points = 0;
	this.direction = SOUTH; 
	this.player = null;


}

Player.prototype.create = function() {
	// game.load.image()
	this.player = game.add.sprite(game.width - 50, game.height - 50, 'player');
	// itede
};

Player.prototype.update = function() {
	// body...
};

Player.prototype.preload = function() {
	this.game.load.spritesheet('player', 'gfx/player.png', 32, 32);
};