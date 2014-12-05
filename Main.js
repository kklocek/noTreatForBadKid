//main.js
(function() {
var testState, testPlayer, bullet;
var game, cursors, direction, controlButton;
var player, enemy, enemyInstance, bulletGroup;
var text;


window.onload = function() {
	game = new Phaser.Game(640,480, Phaser.CANVAS, "gameWindow");
	game.state.add('level', testState);
	game.state.start('level');
	
}

testState = {
	preload: function() {
		//game.load.image('bullet', 'gfx/bullet.png');
		game.load.image('tile', 'gfx/tile.png');
		//game.load.image('enemy', 'gfx/enemy2.png');
		bullet = new Bullet(game);
		bullet.preload();

		player = new Player(game, bullet);
		player.preload();

		enemy = new Enemy(game);
		enemy.preload();

		
		game.world.setBounds(0,0, 640, 480);
    },

    create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
	  	player.create();
		enemyInstance = enemy.makeEnemy(10, 50); //Dorzucić losowanie przeciwników w zależności od lvl

	  	
    },
    
    update: function() {
		player.update();
		game.physics.arcade.moveToObject(enemyInstance, player.getPlayer(), enemy.speedToSurprise);
		game.physics.arcade.collide(bullet.group, enemy.enemyGroup, bullet.killHim);
    }
		
  }
})()