Enemy = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'enemy');
    this.rotateSpeed = 5;
    this.scale.setTo(2,2);
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function() {

    this.angle += this.rotateSpeed;

};