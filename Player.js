//player
function Player(game, bulletFactory) {
	var NORTH = 1;
	var EAST = 2;
	var SOUTH = 3;
	var WEST = 4;

	this.game = game;
	this.points = 0;
	this.direction = SOUTH; 
	this.player = null;
	this.bulletFactory = bulletFactory;


}

Player.prototype.create = function() {

	this.player = this.game.add.sprite(10, this.game.height - 50, 'player');

	this.game.physics.arcade.enable(this.player);
	this.player.collideWorldBounds = true;
	this.player.checkWorldBounds = true;
	// itede
};

Player.prototype.update = function() {
	this.checkControl();
};

Player.prototype.preload = function() {
	this.game.load.spritesheet('player', 'gfx/player.png', 32, 32);
};

Player.prototype.checkControl = function() {

		if(this.game.input.keyboard.isDown(38) && this.player.body.y > 0) //up
		{
			//this.player.body.velocity.y = -50;
			this.player.body.y -= 4;
			this.direction = 1;
		}
		else if(this.game.input.keyboard.isDown(40) && this.player.body.y < (this.game.height - 32)) //down 
		{
			this.player.body.y += 4;
			this.direction = 3;
		}
		else if(this.game.input.keyboard.isDown(37) && this.player.body.x > 0 ) //left
		{
			this.player.body.x -= 4;
			this.direction = 4;
		}
		else if(this.game.input.keyboard.isDown(39) && this.player.body.x < (this.game.width - 32)) //right
		{
			this.player.body.x += 4;
			this.direction = 2;
		}
		else if(this.game.input.keyboard.justPressed(17, 50))
		{
			/*
			var bullet = this.game.add.sprite(this.player.body.x, this.player.body.y, 'bullet');
			this.game.physics.enable(bullet);
			if(this.direction == 1)
				bullet.body.velocity.y = -100;
			else if(this.direction == 2)
				bullet.body.velocity.x = 100;
			else if(this.direction == 3)
				bullet.body.velocity.y = 100;
			else if(this.direction == 4)
				bullet.body.velocity.x = -100; //Tutaj wrzucić konstruktor do bullet :)
			*/
			//var bullet = new Bullet(this.game, this.direction, this.getPlayer());
			var bullet = this.bulletFactory.create(this.player.body.x, this.player.body.y, this.direction);
		}

		if(this.player != null)
			this.player.bringToTop();
		
};

Player.prototype.getPlayer = function() {
	return this.player;
}