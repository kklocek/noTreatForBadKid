//main.js
(function() {
var testState, testPlayer, bullet;
var game, cursors, direction, controlButton;
var player, enemy, enemyInstance, bulletGroup;
var text;
var pointsText;
var lives = [];
var surprises;
var level = 1;
var menuState;
var authorsState;
var timer;
var end;
//var points = 0;

window.onload = function() {
	game = new Phaser.Game(640,480, Phaser.CANVAS, "gameWindow");
	game.state.add('level', levelState);
	game.state.add('end', end);
	game.state.add('menu', menuState);
	game.state.add('authors', authorsState);
	game.state.start('menu');
	
}


menuState = {
	preload: function() {
		game.load.image('menu', 'gfx/menu.png');
		game.load.image('play', 'gfx/play.png');
		game.load.image('authorsAbout', 'gfx/authors.png');

	},

	create: function() {
		game.add.sprite(0,0, 'menu');
		game.add.button(400, 100, 'play', function(){game.state.start('level');});
		game.add.button(400, 250, 'authorsAbout', function(){game.state.start('authors');});
	}
}

authorsState = {
	preload: function() {
		game.load.image('what', 'gfx/whatt.png');
		game.load.image('play', 'gfx/play.png');
		//game.load.image('authorsAbout', 'gfx/authors.png');

	},

	create: function() {
		game.add.sprite(0,0, 'what');
		game.add.button(10, 320, 'play', function(){game.state.start('level');});
		//game.add.button(400, 250, 'authorsAbout', function(){game.state.start('level');});

		game.add.text(10, 10, "Graphics: Alicja Warchal & Robert Poparda (great thanks!), programming: Konrad Klocek", {
        font: '14px Arial',
        fill: '#fff',
        align: 'center'
      	});

      	game.add.text(250, 450, "Controls: arrows to move, control to shoot", {
        font: '14px Arial',
        fill: '#fff',
        align: 'center'
      	});
	}
}

levelState = {
	preload: function() {

		//Sorry, but I have to end this game...
		game.load.image('bench', 'gfx/bench.png');
		game.load.image('bench2', 'gfx/bench2.png');
		game.load.image('bucket', 'gfx/bucket.png');
		game.load.image('surprise1', 'gfx/surprise1.png');
		game.load.image('surprise2', 'gfx/surprise2.png');
		game.load.image('xmasstree', 'gfx/xmasstree.png');


		//game.load.image('bullet', 'gfx/bullet.png');
		game.load.image('tile', 'gfx/tile.png');
		//game.load.image('enemy', 'gfx/enemy2.png');
		bullet = new Bullet(game);
		bullet.preload();

		player = new Player(game, bullet);
		player.preload();

		enemy = new Enemy(game);
		enemy.preload();

		pointsText = game.add.text(game.world.centerX, 10, "Points  = " + player.points, {
        font: '20px Arial',
        fill: '#fff',
        align: 'center'
      	});
		game.world.setBounds(0,0, 640, 480);


    },

    create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
    	//game.add.tileSprite(0,0, );
    	var tile = game.add.tileSprite(0,0, 640, 480, 'tile');
    	
    	var bench = game.add.sprite(200, 50, 'bench');
    	game.physics.arcade.enable(bench);
    	bench.body.immovable = false;


    	var bench2 = game.add.sprite(90, 50, 'bench2');
    	game.physics.arcade.enable(bench2);
    	bench2.body.immovable = false;


    	var bucket = game.add.sprite(20, 50, 'bucket');
    	game.physics.arcade.enable(bucket);
    	bucket.body.immovable = false;


    	var xtree = game.add.sprite(200, 200, 'xmasstree');
    	game.physics.arcade.enable(xtree);
    	xtree.body.immovable = false;
    	//tile.z = 0;

    	surprises = game.add.physicsGroup(Phaser.Physics.ARCADE);
    	for(var k = 0; k < 3; k++) {
    		for(var j = 0; j <= k; j++)
    			surprises.create(j * 16 + 200, k*16 + 100, 'surprise2');
    	}


	  	player.create();
		
		for(var i = 0; i < 3; i++)
			lives.push(game.add.sprite(i * 32 + 5, 0, 'surprise1'));

		timer = game.time.events.loop((5 - level) * 1000, enemy.makeRandomEnemy, enemy);
	  	
    },
    
    update: function() {
		player.update();
		//enemy.update();
		game.world.bringToTop(enemy.enemyGroup);
		game.world.bringToTop(bullet.group);
		game.physics.arcade.collide(enemy.enemyGroup, surprises, lostLive);
		game.physics.arcade.collide(bullet.group, enemy.enemyGroup, player.addPoints, null,player);
		var pts = player.getPoints();
		pointsText.setText("Score = " + pts);
		game.world.bringToTop(pointsText);
		if(pts % 5 == 0) {
			if(level <=5){
			level++;
			}
		}
    }
		
  }

  end = {
  	preload: function() {
  		game.load.image('end', 'gfx/end.png');
  	},

  	create: function() {
  		game.add.sprite(0,0, 'end');
  		game.input.onUp.add(function() {
  			game.state.start('level');
  		});
  	},

  	update: function() {

  	}

  }

  function lostLive(enemy, surprise) {
  	surprise.kill();
  	enemy.kill();
  	lives.pop().destroy();

  	if(lives.length == 0)
  		goHome();
	}

	function goHome() {
		var gameOverText = game.add.text(game.world.centerX, game.world.centerY, 'GAME OVER', {
        font: '80px Arial',
        fill: '#fff',
        align: 'center'
      });
      gameOverText.anchor.setTo(0.5, 0.5);
      
      game.input.onUp.add(function() {
		  game.state.start('end');
	  });
	}
  
})()