import Tetromino from './Tetromino';

test('Creates an "S" tetromino', () => {
  const tetromino = Tetromino.create(TetrominoTemplate.S);
  expect(tetromino.getTemplate);
});
