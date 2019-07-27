import { TILE_SIZE } from './constants';

class Block {
  constructor(color) {
    this.x = 0;
    this.y = 0;
    this.color = color;
  }

  draw(context) {
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
