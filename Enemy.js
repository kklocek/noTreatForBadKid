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
	this.game.load.spritesheet('enemy1', 'gfx/bad1.png', 60, 50);
	this.game.load.spritesheet('enemy2', 'gfx/bad2.png', 42, 50);
	this.game.load.spritesheet('enemy3', 'gfx/bad3.png', 25, 55);
	this.game.load.spritesheet('enemy4', 'gfx/bad4.png', 33, 50);
};

Enemy.prototype.makeEnemy = function(x, y) {
	var enemy = this.enemyGroup.create(x, y, 'enemy');
	enemy.bringToTop();
	this.game.physics.arcade.enable(enemy);
	//enemy.bringToTop();
	//enemy.z = 10;
	return enemy;
}

Enemy.prototype.makeRandomEnemy = function(enemyGroup) {
	var x = parseInt(Math.random() * 1000) % 640;
	var y = parseInt(Math.random() * 1000) % 448 + 32;

	var sprite = parseInt(Math.random() * 10) % 4 + 1;
	//this.makeEnemy(x,y);
	var spriteRnd;

	if(sprite == 1)
		spriteRnd = 'enemy1';
	else if(sprite == 2)
		spriteRnd = 'enemy2';
	else if(sprite == 3)
		spriteRnd = 'enemy3';
	else if(sprite == 4)
		spriteRnd = 'enemy4';
	var enemy = this.enemyGroup.create(x, y, spriteRnd);
	enemy.bringToTop();
	this.game.physics.arcade.enable(enemy);
	this.game.physics.arcade.moveToXY(enemy, 216, 116, this.speedToSurprise);
}