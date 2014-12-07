//player
function Enemy(game) {
	var NORTH = 1;
	var EAST = 2;
	var SOUTH = 3;
	var WEST = 4;

	//TODO
	//Implements various types of enemies
	this.game = game;
	this.enemyGroup = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
	//this.enemyGroup.addAll(, , false, false);
	this.speedToSurprise = 10;
}

Enemy.prototype.create = function() {

};

Enemy.prototype.update = function() {
	//this.enemyGroup.bringToTop(enemyGroup.);
};

Enemy.prototype.preload = function() {
	this.game.load.spritesheet('enemy', 'gfx/enemy2.png', 32, 32);
};

Enemy.prototype.makeEnemy = function(x, y) {
	var enemy = this.enemyGroup.create(x, y, 'enemy');
	enemy.bringToTop();
	this.game.physics.arcade.enable(enemy);
	//enemy.bringToTop();
	//enemy.z = 10;
	return enemy;
}

Enemy.prototype.makeRandomEnemy = function() {
	x = parseInt(Math.random() * 1000) % 640;
	y = parseInt(Math.random() * 1000) % 448 + 32;

	this.makeEnemy(x,y);

}