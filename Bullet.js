//player
function Bullet(game) {
	this.game = game;
	this.group = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
	this.bullet = null;
	this.speed = 100;
}

Bullet.prototype.create = function(x, y, direction) {
	//this.bullet = this.game.add.sprite(this.x, this.y, 'bullet');
	this.bullet = this.group.create(x, y, 'bullet');
	this.game.physics.enable(this.bullet);

	//this.bullet = this.group.create(this.x, this.y, 'bullet');
	if(direction == 1)
		this.bullet.body.velocity.y = -this.speed;
	else if(direction == 2)
		this.bullet.body.velocity.x = this.speed;
	else if(direction == 3)
		this.bullet.body.velocity.y = this.speed;
	else if(direction == 4)
		this.bullet.body.velocity.x = -this.speed;

	this.bullet.outOfBoundsKill = true;

};

Bullet.prototype.preload = function() {
	this.game.load.image('bullet', 'gfx/bullet.png');
};

Bullet.prototype.killHim = function(bullet, enemy) {
	enemy.kill();
	bullet.destroy();
};
