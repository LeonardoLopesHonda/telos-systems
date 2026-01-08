export class TidesEffect {
  #ctx: CanvasRenderingContext2D;
  #width: number;
  #height: number;
  x: number;
  y: number;
  #amplitude: number;
  #length: number;
  #speed: number;
  color: string;
  #increment: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
    /*amplitude: number,
    length: number,
    speed: number,
    color: string */
  ) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = "white";
    this.#width = width;
    this.#height = height;
    this.x = 0;
    this.y = this.#height / 3;
    this.#amplitude = 25;
    this.#length = 0.005;
    this.#speed = 0.025;
    this.color = "rgba(255, 255, 255, .3)";
    this.#increment = 0;
  }

  #draw() {
    this.#ctx.beginPath();
    this.#ctx.moveTo(this.x, this.y);

    for (let i = 0; i < this.#width; i++) {
      const y =
        this.y + Math.sin(i * this.#length + this.#increment) * this.#amplitude;
      this.#ctx.lineTo(i, y);
    }

    this.#ctx.lineTo(this.#width, this.#height);
    this.#ctx.lineTo(0, this.#height);
    this.#ctx.closePath();

    this.#ctx.fillStyle = this.color;
    this.#ctx.fill();

    this.#increment += this.#speed;
  }

  animate() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    this.#draw();
    // this.y += 4.5;
    console.log("stroke is being drawed");
    requestAnimationFrame(this.animate.bind(this));
  }
}
