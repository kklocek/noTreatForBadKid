//player
function Bullet(game, direction, playerFrom, collideWith) {

	this.direction = direction
	this.game = game;
	this.x = playerFrom.body.x;
	this.y = playerFrom.body.y;
	this.bullet = null;
	this.collideWith = collideWith;

	this.preload();
	this.create();
}

Bullet.prototype.create = function() {
	this.bullet = this.game.add.sprite(this.x, this.y, 'bullet');
	this.game.physics.enable(this.bullet);


};

Bullet.prototype.update = function() {
	this.game.physics.arcade.collide(this.bullet, this.collideWith, this.killHim);
};

Bullet.prototype.preload = function() {
	this.game.load.image('bullet', 'gfx/bullet.png');
};

Bullet.prototype.killHim = function(bullet, enemy) {
	enemy.destroy();
	this.bullet.destroy();
};
