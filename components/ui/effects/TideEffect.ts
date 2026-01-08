export class TidesEffect {
  #ctx: CanvasRenderingContext2D;
  #width: number;
  #height: number;
  x: number;
  y: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = 'white';
    this.#width = width;
    this.#height = height;
    this.x = 0;
    this.y = 0;
  }

  #draw(x: number, y: number) {
    const length = this.#width;

    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + length, y);
    this.#ctx.stroke();
  }

  animate() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height)
    this.#draw(this.x, this.y);
    this.y += 4.5;
    console.log('stroke is being drawed');
    requestAnimationFrame(this.animate.bind(this));
  }
}