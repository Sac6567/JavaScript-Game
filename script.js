window.addEventListener("load", function () {
  // canvas setup
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d"); //use to draw and animate 2d/webgl
  canvas.width = 1500;
  canvas.height = 500;

  class InputHandler {
    constructor(game) {
      this.game = game;
      window.addEventListener("keydown", (e) => {
        if (
          (e.key === "ArrowUp" || e.key === "ArrowDown") &&
          this.game.keys.indexOf(e.key) == -1
        ) {
          this.game.keys.push(e.key);
        }
        console.log(this.game.keys);
      });
      window.addEventListener("keyup", (e) => {
        // .indexOf() returns first index at which a given element can be found in the array or it returns -1
        if (this.game.keys.indexOf(e.key) > -1) {
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
        }
        console.log(this.game.keys);
      });
    }
  }
  class Projectile {}
  class Particle {}
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0;
      this.maxSpeed = 3;
    }
    update() {
      // .includes() determines whether an array includes a certain value among its entries, returning true or false
      if (this.game.keys.includes("ArrowUp")) this.speedY = -maxSpeed;
      else if (this.game.keys.includes("ArrowDown")) this.speedY = maxSpeed;
      else this.speedY = 0;
      this.y += this.speedY;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  class Enemy {}
  class Layer {}
  class Background {}
  class UI {}
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.keys = [];
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  // animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
