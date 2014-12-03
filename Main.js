//main.js
(function() {
var testState, testPlayer, bullet;
var game, cursors, direction, controlButton;

window.onload = function() {
	game = new Phaser.Game(640,480, Phaser.CANVAS, "gameWindow");
	
	//
	game.state.add('level', testState);
	game.state.start('level');
}

testState = {
	preload: function() {
		game.load.image('testPlayer', 'gfx/player3.png');
		game.load.image('bullet', 'gfx/bullet.png');
		game.load.image('tile', 'gfx/tile.png');
    },

    create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
	  	testPlayer = game.add.sprite(10, game.height - 50, 'testPlayer');

	  	game.physics.arcade.enable(testPlayer);
	  	testPlayer.collideWorldBounds = true;
	  	cursors = game.input.keyboard.createCursorKeys();
	  	game.add.tileSprite(0, 0, 640, 480, 'tile');

	  	
    },
    
	//System fizyki P2 jest lepszy, zaś Arcade jest prostszy (wszystkie 
	//obiekty są prostokątami)
    update: function() {
		if(cursors.up.isDown) //ZMIENIĆ NA Phaser.Keyboard.isDown etc
		{
			//testPlayer.body.velocity.y = -50;
			testPlayer.body.y -= 4;
			direction = 1;
		}
		else if(cursors.down.isDown) 
		{
			testPlayer.body.y += 4;
			direction = 3;
		}
		else if(cursors.left.isDown)
		{
			testPlayer.body.x -= 4;
			direction = 4;
		}
		else if(cursors.right.isDown)
		{
			testPlayer.body.x += 4;
			direction = 2;
		}
		else if(game.input.keyboard.justPressed(17, 50))
		{
			//console.log('working');
			bullet = game.add.sprite(testPlayer.body.x, testPlayer.body.y, 'bullet');
			game.physics.enable(bullet);
			if(direction == 1)
				bullet.body.velocity.y = -100;
			else if(direction == 2)
				bullet.body.velocity.x = 100;
			else if(direction == 3)
				bullet.body.velocity.y = 100;
			else if(direction == 4)
				bullet.body.velocity.x = -100;
		}
    
    testPlayer.bringToTop();
    }
		
  }
})()