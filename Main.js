//main.js
(function() {
var testState, testPlayer, bullet;
var game, cursors, direction, controlButton, enemy = null;
var player, enemy, enemyInstance, bulletGroup;


window.onload = function() {
	game = new Phaser.Game(640,480, Phaser.CANVAS, "gameWindow");
	game.state.add('level', testState);
	game.state.start('level');
	game.world.setBounds(0,0, 640, 480);
}

testState = {
	preload: function() {
		game.load.image('bullet', 'gfx/bullet.png');
		game.load.image('tile', 'gfx/tile.png');
		//game.load.image('enemy', 'gfx/enemy2.png');
		player = new Player(game);
		player.preload();

		enemy = new Enemy(game);
		enemy.preload();

		//bulletGroup = new Bullet(game);
		//bulletGroup.preload();

    },

    create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
	  	player.create();
	  	//game.add.tileSprite(0, 0, 640, 480, 'tile');

	  	//enemy = game.add.sprite(100, game.height - 100, 'enemy');
	  	//game.physics.arcade.enable(enemy);
	  	//game.debug.spriteInfo(enemy, 32, 32);

		enemyInstance = enemy.makeEnemy(10, 50);

	  	
    },
    
    update: function() {
		player.update();
		//if(!enemy.game) {
			//enemy = game.add.sprite(100, game.height - 100, 'enemy');
	  		//game.physics.arcade.enable(enemy);
		//}
		
		//
		//if(enemy.game)

		//game.physics.arcade.collide(bullet, enemy, killHim);

		game.physics.arcade.moveToObject(enemyInstance, player.getPlayer(), enemy.speedToSurprise);
    }
		
  }

  function killHim(bullet, enemy) {
  	bullet.destroy();
  	enemy.destroy();
  }
})()