import { TILE_SIZE } from './constants';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const context = canvas.getContext('2d');
const rows = 20;
const columns = 10;
canvas.height = rows * TILE_SIZE;
canvas.width = columns * TILE_SIZE;

function main() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  window.requestAnimationFrame(main);
}

main();
