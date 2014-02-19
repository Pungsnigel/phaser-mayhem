(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.cursors = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.game.world.setBounds(0,0, 1280, 940);

      this.background = this.add.sprite(0,0, 'background');

      this.player = this.add.sprite(x, y, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.player.animations.add('walk-left', [8,9,10,11], 10, true);
      this.player.animations.add('walk-right', [12,13,14,15], 10, true);
      this.player.animations.add('walk-up', [0,1,2,3], 10, true);
      this.player.animations.add('walk-down', [4,5,6,7], 10, true);

      this.player.scale.setTo(3,3);
      this.game.camera.follow(this.player);

      this.player.animations.play('walk-up');

      this.cursors = this.game.input.keyboard.createCursorKeys();

    },

    update: function () {

      this.player.body.velocity.setTo(0,0);
      var dir = 0;
      if (this.cursors.up.isDown) {
        this.player.body.velocity.y = -100;
        this.player.animations.play('walk-up');
        dir = 1;
      } 
      if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -100;
        this.player.animations.play('walk-left');
        dir = 2;
      }
      if (this.cursors.right.isDown) {
        this.player.body.velocity.x = 100;
        this.player.animations.play('walk-right');
        dir = 3;
      }
      if (this.cursors.down.isDown) {
        this.player.body.velocity.y = 100;
        this.player.animations.play('walk-down');
        dir = 4;
      }
    },

  };

  window['mayhem'] = window['mayhem'] || {};
  window['mayhem'].Game = Game;

}());
