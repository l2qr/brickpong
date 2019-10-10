import { detectCollision } from "/src/collisionDetection";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.size = 15;
    this.speed = { x: 6, y: -4 };
    this.reset();
  }

  reset() {
    this.position = {
      x: this.game.pad.position.x + this.game.pad.width / 2 - this.size / 2,
      y: this.game.pad.position.y - this.size
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    //TOP BORDER COLLISION
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    //BOTTOM BORDER COLLISION == LOST LIVE
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.pad)) {
      this.speed.y = -this.speed.y;
    }
  }
}
