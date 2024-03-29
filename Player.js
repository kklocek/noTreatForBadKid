//player
function Player(game, bulletFactory) {
	var NORTH = 1;
	var EAST = 2;
	var SOUTH = 3;
	var WEST = 4;

	this.game = game;
	this.points = 1;
	this.direction = SOUTH; 
	this.player = null;
	this.bulletFactory = bulletFactory;
}

Player.prototype.create = function() {

	this.player = this.game.add.sprite(10, this.game.height - 50, 'player');

	this.game.physics.arcade.enable(this.player);
	this.player.collideWorldBounds = true;
	this.player.checkWorldBounds = true;

	this.player.animations.add("right", [0, 1, 2]);
	this.player.animations.add("left", [3, 4, 5]);
	this.player.animations.add("down", [6, 7, 8]);
	this.player.animations.add("up", [9, 10, 11]);
	//this.points = 0;
};

Player.prototype.update = function() {
	this.checkControl();
};

Player.prototype.preload = function() {
	this.game.load.spritesheet('player', 'gfx/elf.png', 36, 50);
};

Player.prototype.checkControl = function() {

		if(this.game.input.keyboard.isDown(38) && this.player.body.y > 32) //up
		{
			//this.player.body.velocity.y = -50;
			this.player.animations.play("up");
			this.player.body.y -= 4;
			this.direction = 1;
		}
		else if(this.game.input.keyboard.isDown(40) && this.player.body.y < (this.game.height - 32)) //down 
		{
			this.player.animations.play("down");
			this.player.body.y += 4;
			this.direction = 3;
		}
		else if(this.game.input.keyboard.isDown(37) && this.player.body.x > 0 ) //left
		{
			this.player.animations.play("left");
			this.player.body.x -= 4;
			this.direction = 4;
		}
		else if(this.game.input.keyboard.isDown(39) && this.player.body.x < (this.game.width - 32)) //right
		{
			this.player.animations.play("right");
			this.player.body.x += 4;
			this.direction = 2;
		}
		else if(this.game.input.keyboard.justPressed(17, 10))
		{
			var bullet = this.bulletFactory.create(this.player.body.x + 18, this.player.body.y + 25, this.direction);
		}

		if(this.player != null)
			this.player.bringToTop();
		
};

Player.prototype.getPlayer = function() {
	return this.player;
}

Player.prototype.addPoints = function(bullet, enemy) {
	//console.log(this.points);
	this.points = this.points + 1;
	//console.log(this.points);
	//console.log(Number(this.points));
	//bullet.killHim(bullet, enemy);
	bullet.kill();
	enemy.kill();
}

Player.prototype.checkPoints = function(pointsText) {
		//console.log(pointsText.text + this.points);
		pointsText.text = "Points = " + this.points;
}

Player.prototype.getPoints = function() {
	return this.points;
}