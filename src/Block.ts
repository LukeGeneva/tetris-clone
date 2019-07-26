import { TILE_SIZE } from './constants';

interface Block {
  x: number;
  y: number;
  color: string;
}

class Block implements IDrawable {
  constructor(color: string) {
    this.x = 0;
    this.y = 0;
    this.color = color;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.strokeStyle = 'black';
    context.fillRect(
      this.x * TILE_SIZE,
      this.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
    context.strokeRect(
      this.x * TILE_SIZE,
      this.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }
}

export default Block;
