'use strict';
// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

    //when enemy off canvas, reset position to move acrose again
    if (this.x > 550) {
      this.x = -100;
      this.speed = Math.floor((Math.random() * 600 + 200));
    }

    // check collision between player and Enemies
    if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
      player.x = 200;
      player.y = 300;
    }
};

// hold the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function (x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // load images
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    // Prevent player from moving beyond canvas wall boundaries
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // check if player reaches the water
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;

        // when player win
        if (this.sprite = 'images/water-block.png') {
          alert("Congratulation you win \nPlay again press 'OK'");
        }
    }
    this.sprite = 'images/char-boy.png';
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= this.speed + 50;  // Move left one block until the edge of the board
            break;
        case 'up':
            this.y -= this.speed + 30;  // Move up one block until the edge of the board
            break;
        case 'right':
            this.x += this.speed + 50;  // Move right one block until the edge of the board
            break;
        case 'down':
            this.y += this.speed + 30;  // Move down one block until the edge of the board
            break;
    }
};

// Place all enemy objects in an array called allEnemies
const allEnemies = [];

// Position "y" where the enemies will are created
const enemyPosition = [60, 145, 225];

// Place the player object in a variable called player
const player = new Player(200, 390, 50);
let enemy;


enemyPosition.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',    // left arrow
        38: 'up',      // up arrow
        39: 'right',   // right arrow
        40: 'down'     // down arrow
        //65: 'left',    // A
        //87: 'up',      // W
      //  68: 'right',   // D
      //  83: 'down'     // S
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
