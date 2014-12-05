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
	//this.game.physics.startSystem(Phaser.Physics.ARCADE);
	//this.player = game.add.sprite(game.width - 50, game.height - 50, 'player');
	this.player = game.add.sprite(10, game.height - 50, 'player');

	this.game.physics.arcade.enable(this.player);
	this.player.collideWorldBounds = true;
	// itede
};

Player.prototype.update = function() {
	// body...
};

Player.prototype.preload = function() {
	this.game.load.spritesheet('player', 'gfx/player.png', 32, 32);
};

Player.prototype.checkControl = function() {

		if(this.game.input.keyboard.isDown()) //ZMIENIĆ NA Phaser.Keyboard.isDown etc
		{
			//this.player.body.velocity.y = -50;
			this.player.body.y -= 4;
			this.direction = 1;
		}
		else if(this.game.input.keyboard.isDown()) 
		{
			this.player.body.y += 4;
			this.direction = 3;
		}
		else if(this.game.input.keyboard.isDown())
		{
			this.player.body.x -= 4;
			this.direction = 4;
		}
		else if(this.game.input.keyboard.isDown())
		{
			this.player.body.x += 4;
			this.direction = 2;
		}
		else if(game.input.keyboard.justPressed(17, 50))
		{
			//console.log('working');
			bullet = game.add.sprite(this.player.body.x, this.player.body.y, 'bullet');
			game.physics.enable(bullet);
			if(this.direction == 1)
				bullet.body.velocity.y = -100;
			else if(this.direction == 2)
				bullet.body.velocity.x = 100;
			else if(this.direction == 3)
				bullet.body.velocity.y = 100;
			else if(this.direction == 4)
				bullet.body.velocity.x = -100; //Tutaj wrzucić konstruktor do bullet :)
		}

		
		this.player.bringToTop();
		
};