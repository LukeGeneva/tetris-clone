import Tetromino from './Tetromino';
import tetrominoTemplates from './tetrominoTemplates';

test('Creates an "S" tetromino', () => {
  const tetromino = Tetromino.create('S');
  expect(tetromino.getTemplate()).toEqual(tetrominoTemplates.S[0]);
});
