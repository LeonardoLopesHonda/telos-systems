export class TidesEffect {
  #ctx: CanvasRenderingContext2D;

  #width: number;
  #height: number;

  #baseY: number;
  #fillToY: number;
  #amplitude: number;
  #frequency: number;
  
  #speed: number;
  #time: number;

  color: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    config: {
      baseY: number,
      fillToY: number,
      amplitude?: number;
      frequency?: number;
      speed?: number;
      color: string,
    }
  ) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;

    this.#baseY = config.baseY;
    this.#fillToY = config.fillToY;
    this.#amplitude = config.amplitude ?? 25;
    this.#frequency = config.frequency ?? 0.005;

    this.#speed = config.speed ?? 0.0085;
    this.#time = 0;
    
    this.color = config.color;
  }

  draw() {
    const ctx = this.#ctx;

    ctx.beginPath();
    ctx.moveTo(0, this.#baseY);

    for (let x = 0; x < this.#width; x++) {
      const y =
        this.#baseY + Math.sin(x * this.#frequency + this.#time) * this.#amplitude;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(this.#width, this.#fillToY);
    ctx.lineTo(0, this.#fillToY);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.#time += this.#speed;
  }

  resize(width: number, height: number) {
    this.#width = width;
    this.#height = height;
    this.#fillToY = height;
  }
}
