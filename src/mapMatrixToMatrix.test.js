import mapMatrixToMatrix from './mapMatrixToMatrix';

test('applies matrix values onto another matrix at given position', () => {
  const destination = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const source = [[1, 1], [1, 1]];
  const expected = [[1, 1, 0], [1, 1, 0], [0, 0, 0]];
  const at = [0, 0];
  expect(mapMatrixToMatrix(source, destination, at)).toEqual(expected);
});

test('applies matrix values onto another matrix at non-origin position', () => {
  const destination = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const source = [[1, 1], [1, 1]];
  const expected = [[0, 0, 0], [0, 1, 1], [0, 1, 1]];
  const at = [1, 1];
  expect(mapMatrixToMatrix(source, destination, at)).toEqual(expected);
});
