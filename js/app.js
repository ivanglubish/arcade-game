'use strict'
// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';    // load enemy images
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x +=this.speed * dt;  // enemy speed

    if (this.x > 550) {
      this.x = -100;     // new enemy location
      this.speed = Math.floor((Math.random() * 600 + 200));
    }

    if (player.x < this.x + 60 &&
      player.x + 37 > this.x &&
      player.y < this.y + 25 && 30 +
      player.y > this.y) {
      console.log('collision');
      player.x = 200;
      player.y = 390;
      player.sprite = 'images/char-boy.png'; // change player back to char-boy
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y, sprite) {
      this.y = y;
      this.x = x;
      this.sprite = sprite;  //load player images
}

Player.prototype.update = function(keyPress) {
  if (this.x < 0) {      // don't cross canvas left
    this.x = 0;
  }
  if (this.x > 400) {    // don't cross canvas right
    this.x = 400;
  }
  if (this.y > 390) {    // don't cross canvas down
    this.y = 390;
  }

  // if player reach woter on third block move player back to position and change to cat-girl
  if (this.y < 0 && this.x == 200) {  // don't cross canvas up
      player.x = 200;
      player.y = 390;
      player.sprite = player.cat;
      alert('you are a cat girl');
    }
    // if player reach woter on forth block move player back to a new position and change to horn-girl
    if (this.y < 0 && this.x == 300) {  // don't cross canvas up
      player.x = 300;
      player.y = 390;
      player.sprite = player.horn;
      alert('you are a horn girl');
    }
    // if player reach woter on second block move player back to a new position and change to pink-girl
    if (this.y < 0 && this.x == 100) {  // don't cross canvas up
      player.x = 100;
      player.y = 390;
      player.sprite = player.pink;
      alert('you are pink girl');
    }
    // if player reach woter on fifth block move player back to position and change to char-boy
    if (this.y < 0 && this.x == 400) {  // don't cross canvas up
      player.x = 400;
      player.y = 390;
      player.sprite = 'images/char-boy.png';
      alert('you are a boy');
    }
    // if player reach woter on first block move player back to a new position and change to princess-girl
    if (this.y < 0 && this.x == 0) {  // don't cross canvas up
      player.x = 0;
      player.y = 390;
      player.sprite = player.princess;
      alert('you are a princess');
    }
}

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyPress){
  switch (keyPress) {
    case 'left':       // move left on block
    this.x -= 100;
    break;

    case 'right':      // move right on block
    this.x += 100;
    break;

    case 'up':         // move up on block
    this.y -= 85;
    break;

    case 'down':       // move down on block
    this.y += 85;
    break;
    default:
  }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
// Place the player object in a variable called player
const player = new Player(200, 390, 'images/char-boy.png');
player.cat = 'images/char-cat-girl.png';
player.horn = 'images/char-horn-girl.png';
player.pink = 'images/char-pink-girl.png';
player.princess = 'images/char-princess-girl.png';

//enemy location
const enemyLocation = [60, 145, 225];
let enemy;
enemyLocation.forEach(function(location) {
  enemy = new Enemy (0, location, 100 + Math.floor(Math.random() * 600));
  allEnemies.push(enemy);
})

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

