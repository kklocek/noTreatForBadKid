//player
function Bullet(game, direction, playerFrom) {

	this.direction = direction;
	this.game = game;
	this.x = playerFrom.body.x;
	this.y = playerFrom.body.y;
	//this.group = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
	this.bullet = null;
	//.collideWith = collideWith;

	this.preload();
	this.create();
	this.game.time.events.loop(1000, this.update);
	//this.update();
}

Bullet.prototype.create = function() {
	this.bullet = this.game.add.sprite(this.x, this.y, 'bullet');
	this.game.physics.enable(this.bullet);

	//this.bullet = this.group.create(this.x, this.y, 'bullet');
	if(this.direction == 1)
		this.bullet.body.velocity.y = -100;
	else if(this.direction == 2)
		this.bullet.body.velocity.x = 100;
	else if(this.direction == 3)
		this.bullet.body.velocity.y = 100;
	else if(this.direction == 4)
		this.bullet.body.velocity.x = -100;

	this.bullet.outOfBoundsKill = true;

};

Bullet.prototype.update = function() {
	this.game.physics.arcade.collide(this.group, Enemy.enemygroup, this.killHim);
};

Bullet.prototype.preload = function() {
	this.game.load.image('bullet', 'gfx/bullet.png');
};

Bullet.prototype.killHim = function(bullet, enemy) {
	enemy.destroy();
	this.bullet.destroy();
};
